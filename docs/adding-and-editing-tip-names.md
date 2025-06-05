---
title: Adding & Editing Tip Names
---

Tip labels turn your node map into a readable phylogeny. You can load a text file with the names in order (top to botton) or you can enter them in the tip name editor.

## 1. Supply Names

| Method | Menu Path | Notes |
|--------|-----------|-------|
| **Load TXT file** | `File ▾ → Load Tip Names…` | One name per line |
| **Edit in built-in editor** | `File ▾ → Edit Tip Names` | Opens side-window |

After entering your tip names, you will see the entered names show up under the tip lables on the image when **Show Tree** is on. You can compare and check to make sure the names are correct.

![Edit names screenshot](/img/Docs/Treemble_with_edit_tips.png)

## 2. Order Matters

Treemble assigns names **top-to-bottom** (rectangular) or **anticlockwise** from the break point (circular).  
Use **Equalize Tips** beforehand if the order is ambiguous.

## 3. Name-Count Safety

A banner warns if *tip nodes ≠ name lines*.  
Fix by adding/removing nodes or editing the TXT list.

## 4. External Tools

> **Name Extractor GPT** (under **Help ▾**) can perform optical character recognition to read the species names from the figure into a ready-made TXT list that you can download. 
Try it out here: https://chatgpt.com/g/g-rwiIPwboh-tip-name-extractor

When there are many tips in one figure, it is a good idea to zoom in and take screen shots of smaller chunks of the names and then assemble them.  As of 2025, it works well with higher resolution images with up to around 50 names.