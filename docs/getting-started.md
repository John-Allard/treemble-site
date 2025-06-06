---
title: Getting Started
---

## Installation

You can download Treemble from:

- [macOS Version](https://github.com/John-Allard/treemble/releases/latest/download/Treemble-macOS.dmg) (.dmg file, 6MB)
- [Windows Version](https://github.com/John-Allard/treemble/releases/latest/download/Treemble-Windows.exe) (.msi installer 4MB)

#### System requirements:

* macOS: macOS Catalina (10.15) or later
* Windows: Windows 10 or later


## First Launch

Once launched, you'll see the blank window. You can begin by loading a phylogenetic tree image. Either drag and drop yur image file directly onto the Treemble window, or use `File ▾ → Choose Tree Image` 

**Supported image formats:** PNG, JPEG (JPG), GIF, WebP, BMP, and SVG.

You can launch the **Quick Start Guide** within Treemble for a quick overview: `Help ▾ → Quick Start Guide` 

## Tree Requirements

**There are two requirements for Treemble to work:**
* The tree should be oriented with the root at the left and tips at the right (or they can be placed radially in circular tree mode). Treemble cannot handle free form or unrooted trees.
* The tree must be bifurcating, i.e. every internal node must have exactly two child nodes. However, if there are nodes with more than 2 child nodes (hard polytomies), you can still extract the tree with Treemble by placing extra nodes to create bifurcations with ~0 length (soft polytomies).

![UI overview](/img/Docs/blank_treemble_with_file_menu_open.png)



