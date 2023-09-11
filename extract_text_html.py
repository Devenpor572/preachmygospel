from bs4 import BeautifulSoup
from bs4.element import Comment
import argparse
import os

def tag_visible(element):
    if element.parent.name in ['style', 'script', 'head', 'title', 'meta', '[document]']:
        return False
    if isinstance(element, Comment):
        return False
    return True

def extract_text(file):
    with open(file, 'r') as html_file:
        soup = BeautifulSoup(html_file, 'html.parser')
        texts = soup.findAll(text=True)
        visible_texts = filter(tag_visible, texts)
        return u"\n".join(t.strip() for t in visible_texts)

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('-i', '--input', help='Input HTML file', required=True)
    parser.add_argument('-o', '--output', help='Output text file', required=True)
    args = parser.parse_args()

    text = extract_text(args.input)
    
    with open(args.output, 'w') as output_file:
        output_file.write(text)

if __name__ == "__main__":
    main()
