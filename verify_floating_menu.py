import glob
import os

# Get all HTML files
files = glob.glob("*.html")

# Filter lesson files (exclude templates and index)
lesson_files = [f for f in files if not ("template" in f or f == "index.html")]

# Check each file
missing_script = []
has_script = []

for filename in lesson_files:
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if 'floating-menu.js' in content:
        has_script.append(filename)
    else:
        missing_script.append(filename)

# Print report
print(f"=== FLOATING MENU VERIFICATION REPORT ===\n")
print(f"Total lesson files: {len(lesson_files)}")
print(f"Files WITH floating-menu.js: {len(has_script)}")
print(f"Files MISSING floating-menu.js: {len(missing_script)}\n")

if missing_script:
    print("Files missing floating-menu.js:")
    for f in missing_script:
        print(f"  - {f}")
else:
    print("✅ All lesson files have floating-menu.js!")

print(f"\nSample files verified:")
for f in has_script[:5]:
    print(f"  ✓ {f}")
