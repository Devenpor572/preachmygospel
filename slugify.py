import argparse
import os
import re

def slugify_filename(filename):
    trimmed_filename = filename.strip()
    slug_filename = re.sub(r'\s+', '-', trimmed_filename)
    stem, ext = os.path.splitext(slug_filename)
    clean_slug_filename = re.sub(r'-$', '', stem) + ext
    return clean_slug_filename.replace('—', '-')

def main():
    parser = argparse.ArgumentParser(description="Rename files in a directory by trimming whitespace and replacing internal whitespace with hyphens.")
    parser.add_argument('directory', help="Path to the input directory containing the files to be renamed")
    args = parser.parse_args()
    if not os.path.exists(args.directory):
        print(f"Error: Directory '{args.directory}' does not exist.")
        return
    for filename in os.listdir(args.directory):
        if os.path.isfile(os.path.join(args.directory, filename)):
            slug_filename = slugify_filename(filename)
            original_path = os.path.join(args.directory, filename)
            new_path = os.path.join(args.directory, slug_filename)
            os.rename(original_path, new_path)

    print("File renaming complete.")

if __name__ == "__main__":
    main()
