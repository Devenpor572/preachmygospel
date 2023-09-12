import argparse
from bs4 import BeautifulSoup
from bs4.element import Comment
import codecs
import glob
import os
import pathlib
import re
import sys

def slugify_filename(filename):
    stem, ext = os.path.splitext(filename)
    trimmed_filename = stem.strip()
    trimmed_filename = re.sub(r'[^a-zA-Z0-9\s]', '', trimmed_filename)
    slug_filename = re.sub(r'\s+', '-', trimmed_filename)
    clean_slug_filename = re.sub(r'-$', '', slug_filename)
    return clean_slug_filename.replace('—', '-') + ext

def tag_visible(element):
    if element.parent.name in ['style', 'script', 'head', 'title', 'meta', '[document]']:
        return False
    if isinstance(element, Comment):
        return False
    return True

def extract_text(soup, recursive=True):
    texts = soup.find_all(recursive=recursive, text=True)
    visible_texts = filter(tag_visible, texts)
    return [visible_text.strip() for visible_text in visible_texts]

def extract_section_lines(soup, recursive=True):
    results = []
    ids = soup.select('*[id]')
    for id in ids:
        results.append(u' '.join(extract_text(id, recursive)))
    return results

def process_multiline_string(input_string):
    modified_str = input_string.replace('  ', '\n')
    sentences = re.split(r'(?<=[.!?\n])\s+', modified_str)
    cleaned_lines = [line.strip() for line in sentences if line.strip()]
    result_string = '\n'.join(cleaned_lines)
    return result_string

def extract_text_from_file(filename, output_dir):
    with codecs.open(filename, 'r', 'utf-8') as f_in:
        output_sub_dir = os.path.join(output_dir, pathlib.Path(filename).stem)
        os.makedirs(output_sub_dir, exist_ok=True)
        html_content = f_in.read()
        sections = BeautifulSoup(html_content, "html.parser").select_one('.body-block').find_all(recursive=False)
        section_idx = 0
        text = ''
        is_section = False
        for section in sections:
            filename = None
            headers = section.find_all(re.compile('^h[1-6]$'))
            if headers:
                title_texts = extract_text(headers[0])
                if title_texts and title_texts[0]:
                    section_idx += 1
                    text = ''
                    is_section = True
                    filename = f'{section_idx:02d}_{slugify_filename(title_texts[0])}.txt'
            elif is_section:
                section_idx += 1
                text = ''
                is_section = False
            if not filename:
                filename = f'{section_idx:02d}.txt'
            output_file_path = os.path.join(output_sub_dir, filename)
            extracted_lines = extract_section_lines(section)
            if extracted_lines:
                section_text = '\n'.join(extracted_lines)
            else:
                section_text = '\n'.join(extract_text(section))
            cleaned_section_text = process_multiline_string(section_text)
            if cleaned_section_text:
                text += cleaned_section_text + '\n'
                with open(output_file_path, 'w') as output_file:
                    output_file.write(text)

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('input', help='A list of globs', nargs='+')
    parser.add_argument('-o', '--output', help='Output directory', default='output')
    # TODO Restore this
    args = parser.parse_args(sys.argv[1:])
    # args = parser.parse_args(['chapter_content/v1_2004_missionary_service/*.htm', '--output', 'output/v1_2004_missionary_service'])
    os.makedirs(args.output, exist_ok=True)
    for input_glob in args.input:
        files = glob.glob(input_glob)
        for file in files:
            assert(os.path.isfile(file))
            extract_text_from_file(file, args.output)
