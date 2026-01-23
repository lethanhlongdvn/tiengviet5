import glob
import re
import os

def main():
    all_html = glob.glob("*.html")
    
    # Skip backup and template files
    skip_files = ['index_backup.html']
    
    report = {
        'missing_script': [],
        'missing_top_menu_btn': [],
        'missing_top_menu_dropdown': [],
        'ok': []
    }
    
    for html_file in all_html:
        if html_file in skip_files:
            continue
            
        with open(html_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        issues = []
        
        # 1. Check for floating-menu.js script
        if 'js/floating-menu.js' not in content:
            issues.append('missing_script')
            report['missing_script'].append(html_file)
        
        # 2. Check for top menu button (id="top-menu-lesson-btn")
        if 'id="top-menu-lesson-btn"' not in content:
            issues.append('missing_top_menu_btn')
            report['missing_top_menu_btn'].append(html_file)
        
        # 3. Check for top menu dropdown container (id="top-menu-lessons-dropdown")
        if 'id="top-menu-lessons-dropdown"' not in content:
            issues.append('missing_top_menu_dropdown')
            report['missing_top_menu_dropdown'].append(html_file)
        
        if not issues:
            report['ok'].append(html_file)
    
    # Print Report (ASCII only)
    print("=" * 60)
    print("MENU AUDIT REPORT")
    print("=" * 60)
    
    print(f"\n[OK] Files with both menus OK: {len(report['ok'])}")
    
    if report['missing_script']:
        print(f"\n[ERROR] Files MISSING floating-menu.js script ({len(report['missing_script'])}):")
        for f in report['missing_script']:
            print(f"   - {f}")
    
    if report['missing_top_menu_btn']:
        print(f"\n[WARN] Files MISSING top-menu-lesson-btn ({len(report['missing_top_menu_btn'])}):")
        for f in report['missing_top_menu_btn']:
            print(f"   - {f}")
    
    if report['missing_top_menu_dropdown']:
        print(f"\n[WARN] Files MISSING top-menu-lessons-dropdown ({len(report['missing_top_menu_dropdown'])}):")
        for f in report['missing_top_menu_dropdown']:
            print(f"   - {f}")
    
    print("\n" + "=" * 60)

if __name__ == "__main__":
    main()
