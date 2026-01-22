import glob
import re

# Files that need floating-menu.js
target_files = [
    'cd1-the-gioi-tuoi-tho.html',
    'cd2-thien-nhien-ki-thu.html',
    'cd3-tren-con-duong-hoc-tap.html',
    'cd4-nghe-thuat-muon-mau.html',
    'cd5-ve-dep-cuoc-song.html',
    'cd6-huong-sac-tram-mien.html',
    'cd7-tiep-buoc-cha-ong.html',
    'cd8-the-gioi-cua-chung-ta.html',
    'on-tap-hk1-cuoi.html',
    'on-tap-hk1-giua.html',
    'on-tap-hk2-cuoi.html',
    'on-tap-hk2-giua.html'
]

count = 0
for filename in target_files:
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if already has the script
        if 'floating-menu.js' in content:
            print(f"Skipped {filename} (already has script)")
            continue
        
        # Add script before </body>
        if '</body>' in content:
            new_content = content.replace('</body>', '    <script src="js/floating-menu.js"></script>\n</body>')
            
            with open(filename, 'w', encoding='utf-8') as f:
                f.write(new_content)
            
            print(f"Updated {filename}")
            count += 1
        else:
            print(f"Warning: {filename} has no </body> tag")
    except FileNotFoundError:
        print(f"File not found: {filename}")
    except Exception as e:
        print(f"Error with {filename}: {e}")

print(f"\nTotal files updated: {count}")
