# Downloading Figma Assets

## Prerequisites
1. **Figma Desktop App must be open** with your design file
2. The design file should be the active tab in Figma

## Method 1: Using the Download Script (Recommended)

1. Open Figma Desktop App
2. Open your design file: `Prateek's Workbench`
3. Make sure the homepage frame is visible
4. Run the download script:

```bash
./scripts/download-figma-assets.sh
```

This will download all assets to `public/images/`

## Method 2: Manual Download from Figma

1. Open Figma Desktop App
2. Select the elements you need:
   - Logo (the small icon in the header)
   - Case study images (3 images for the case study cards)
   - Project images (for AI projects section)
   - Blog images (if any)

3. Right-click on each element → **Export** → Choose format (PNG/SVG)
4. Save to `public/images/` with these names:
   - `logo.svg` - Logo
   - `case-study-1.png` - Invoicing case study image
   - `case-study-2.png` - Fee Settings case study image
   - `case-study-3.png` - Checkout case study image
   - `project-image-1.png` - First AI project image
   - `project-image-2.png` - Second AI project image
   - `logo-selection.png` - Logo selection indicator

## Method 3: Export All Assets at Once

1. In Figma, select the entire frame
2. Go to **File** → **Export** → **Export Selection**
3. Choose export settings (2x or 3x for images)
4. Export to `public/images/`
5. Rename files to match the expected names above

## Verifying Assets

After downloading, verify the files exist:

```bash
ls -lh public/images/
```

You should see:
- logo.svg
- case-study-1.png
- case-study-2.png
- case-study-3.png
- project-image-1.png
- project-image-2.png
- logo-selection.png

## Troubleshooting

**If the script says "Error getting image":**
- Make sure Figma Desktop App is running
- Make sure the design file is open and active
- Try refreshing the Figma file or restarting the Figma app

**If images don't show in the browser:**
- Check that files are in `public/images/` (not `public/`)
- Verify file names match exactly (case-sensitive)
- Clear browser cache and refresh

