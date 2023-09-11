import argparse
import glob
from bs4 import BeautifulSoup
import codecs


def extract_elements(html_content, selector):
    soup = BeautifulSoup(html_content)
    elements = soup.select(selector)
    return elements


def main(input_globs, output_file, selector):
    with codecs.open(output_file, 'w', 'utf-8') as f_out:
        for input_glob in input_globs:
            for filename in glob.glob(input_glob):
                print(filename)
                with codecs.open(filename, 'r', 'utf-8') as f_in:
                    html_content = f_in.read()
                    elements = extract_elements(html_content, selector)
                    for element in elements:
                        f_out.write(str(element) + '\n')


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("-i", "--input", nargs='+', help="Input HTML file globs", required=True)
    parser.add_argument("-o", "--output", help="Output file", required=True)
    parser.add_argument("-s", "--selector", help="CSS selector", required=True)
    args = parser.parse_args()

    main(args.input, args.output, args.selector)
