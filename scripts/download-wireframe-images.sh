#!/bin/bash

# Script to download wireframe images from Figma
# Make sure Figma desktop app is open with the design file

ASSETS_DIR="public/images/fee-settings"
mkdir -p "$ASSETS_DIR"

echo "Downloading wireframe images from Figma..."
echo "Make sure Figma desktop app is open with the design file!"

# First wireframes section (USD → INR) - 5 images
echo "Downloading first wireframes section images..."
curl -f -o "$ASSETS_DIR/wire-1.png" "http://localhost:3845/assets/0c492e26e3125c7c6ada9d8cc6f14f4d29320cce.png" || echo "Failed to download wire-1.png"
curl -f -o "$ASSETS_DIR/wire-2.png" "http://localhost:3845/assets/2a22787f29132b58c3e774d99100cd2929031a73.png" || echo "Failed to download wire-2.png"
curl -f -o "$ASSETS_DIR/wire-3.png" "http://localhost:3845/assets/3cc90e684e1fdf74d999f3519aae16889259a25d.png" || echo "Failed to download wire-3.png"
curl -f -o "$ASSETS_DIR/wire-4.png" "http://localhost:3845/assets/78e9b962786988f4332d82b00964bf5d1ae7a102.png" || echo "Failed to download wire-4.png"
curl -f -o "$ASSETS_DIR/wire-5.png" "http://localhost:3845/assets/4a96399e52d1b0d1a63c308113419a762144f71a.png" || echo "Failed to download wire-5.png"

# Multi-currency wireframes section - 4 images for first subsection
echo "Downloading multi-currency wireframes section images..."
curl -f -o "$ASSETS_DIR/wire-multi-1.png" "http://localhost:3845/assets/0c492e26e3125c7c6ada9d8cc6f14f4d29320cce.png" || echo "Failed to download wire-multi-1.png"
curl -f -o "$ASSETS_DIR/wire-multi-2.png" "http://localhost:3845/assets/a7d9f61848466412a59dd579d05b0273dc135386.png" || echo "Failed to download wire-multi-2.png"
curl -f -o "$ASSETS_DIR/wire-multi-3.png" "http://localhost:3845/assets/30eb28e45b44bb6d6a39d8011f6f6cd42b74a1d6.png" || echo "Failed to download wire-multi-3.png"
curl -f -o "$ASSETS_DIR/wire-multi-4.png" "http://localhost:3845/assets/b462b36b987a25556c845c8c8d62c2ddd1f100c7.png" || echo "Failed to download wire-multi-4.png"

# Second subsection of multi-currency wireframes - 4 more images
# Note: These might be the same as above or different - check Figma design
curl -f -o "$ASSETS_DIR/wire-multi-5.png" "http://localhost:3845/assets/0c492e26e3125c7c6ada9d8cc6f14f4d29320cce.png" || echo "Failed to download wire-multi-5.png"
curl -f -o "$ASSETS_DIR/wire-multi-6.png" "http://localhost:3845/assets/a7d9f61848466412a59dd579d05b0273dc135386.png" || echo "Failed to download wire-multi-6.png"
curl -f -o "$ASSETS_DIR/wire-multi-7.png" "http://localhost:3845/assets/30eb28e45b44bb6d6a39d8011f6f6cd42b74a1d6.png" || echo "Failed to download wire-multi-7.png"
curl -f -o "$ASSETS_DIR/wire-multi-8.png" "http://localhost:3845/assets/b462b36b987a25556c845c8c8d62c2ddd1f100c7.png" || echo "Failed to download wire-multi-8.png"

# Platform Earnings wireframes section - 8 images
echo "Downloading platform earnings wireframes section images..."
curl -f -o "$ASSETS_DIR/wire-earnings-1.png" "http://localhost:3845/assets/263272c4fb6cd6fc77c1f405d8c7cae7e1a8ac15.png" || echo "Failed to download wire-earnings-1.png"
curl -f -o "$ASSETS_DIR/wire-earnings-2.png" "http://localhost:3845/assets/16a85226541dbff21498dd63e8f2de307dccc756.png" || echo "Failed to download wire-earnings-2.png"
curl -f -o "$ASSETS_DIR/wire-earnings-3.png" "http://localhost:3845/assets/9f3503937b1474db6d43bf01ec979d917a8591b9.png" || echo "Failed to download wire-earnings-3.png"
curl -f -o "$ASSETS_DIR/wire-earnings-4.png" "http://localhost:3845/assets/8af680e41c0afdd60fcbf148c7957c1a1da96b85.png" || echo "Failed to download wire-earnings-4.png"
curl -f -o "$ASSETS_DIR/wire-earnings-5.png" "http://localhost:3845/assets/f0dc3c16cdd442893d0ab2089aee7c07088ecf68.png" || echo "Failed to download wire-earnings-5.png"
curl -f -o "$ASSETS_DIR/wire-earnings-6.png" "http://localhost:3845/assets/953ecca64e564ee3352117864fc228650f8fafa3.png" || echo "Failed to download wire-earnings-6.png"
curl -f -o "$ASSETS_DIR/wire-earnings-7.png" "http://localhost:3845/assets/942845ad8c4560b252a4a11a33c8585bb93623f1.png" || echo "Failed to download wire-earnings-7.png"
curl -f -o "$ASSETS_DIR/wire-earnings-8.png" "http://localhost:3845/assets/74450691714536bac441a7ff85581e5825b2485d.png" || echo "Failed to download wire-earnings-8.png"

echo ""
echo "Wireframe images download complete!"
echo "Downloaded images to $ASSETS_DIR"
ls -lh "$ASSETS_DIR" | grep "wire"

