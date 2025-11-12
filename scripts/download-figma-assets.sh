#!/bin/bash

# Script to download Figma assets
# Make sure Figma desktop app is open with the design file

ASSETS_DIR="public/images"
mkdir -p "$ASSETS_DIR"

echo "Downloading Figma assets..."
echo "Make sure Figma desktop app is open with the design file!"

# Case study images
curl -o "$ASSETS_DIR/case-study-1.png" "http://localhost:3845/assets/ddd47ff899225c4e6290f8473f11d2ddc147f022.png"
curl -o "$ASSETS_DIR/case-study-2.png" "http://localhost:3845/assets/965885a56d4cc7a0fdf3ab4e8768591be328c2c1.png"
curl -o "$ASSETS_DIR/case-study-3.png" "http://localhost:3845/assets/67c4506ce21a4b51650a7690bfac91949ab76e81.png"

# Project images
curl -o "$ASSETS_DIR/project-image-1.png" "http://localhost:3845/assets/c1e097c01df6b59f8edaa923a1d2eb4e81bcf176.png"
curl -o "$ASSETS_DIR/project-image-2.png" "http://localhost:3845/assets/e89d6a16623f201389214c4d7474c2e0257f11bc.png"
curl -o "$ASSETS_DIR/logo-selection.png" "http://localhost:3845/assets/8940be3f75ef514ea2c9b581b237e7ece57d2394.png"

# Logo
curl -o "$ASSETS_DIR/logo.svg" "http://localhost:3845/assets/04e3f87fc19c7aa889c152aba9b29bfa4fa6ac87.svg"

echo "Assets downloaded to $ASSETS_DIR"
ls -lh "$ASSETS_DIR"

