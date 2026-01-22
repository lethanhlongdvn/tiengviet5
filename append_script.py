import glob
import os

files = glob.glob("*.html")
target_files = []
for f in files:
    if "template" in f or f == "index.html":
        continue
    # Only target the files we updated (Themes 5,6,7,8)
    base = os.path.basename(f)
    if not any(base.startswith(prefix) for prefix in ['19', '20', '21', '22', '23', '24', '25', '26', '28', '29', '30', '31']):
        continue
    target_files.append(f)

count = 0
for filename in target_files:
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if 'js/floating-menu.js' not in content:
            # Append before </body>
            if '</body>' in content:
                new_content = content.replace('</body>', '<script src="js/floating-menu.js"></script>\n</body>')
                with open(filename, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Appended script to {filename}")
                count += 1
            else:
                print(f"Skipped {filename} (No </body> tag)")
        else:
            print(f"Skipped {filename} (Already has script)")
    except Exception as e:
        print(f"Error processing {filename}: {e}")

print(f"Total files appended: {count}")
