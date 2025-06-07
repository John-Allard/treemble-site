---
title: Adding & Editing Tip Names
---

Tip labels turn your node map into a readable phylogeny. You can load a text file with the names in order (top to botton) or you can enter them in the tip name editor. 

## 1. Supply Names

| Method | Menu Path | Notes |
|--------|-----------|-------|
| **Load TXT file** | `File ▾ → Load Tip Names…` | One name per line |
| **Edit in built-in editor** | `File ▾ → Edit Tip Names` | Opens side-window |
| **Drag and Drop** |   | Just drag your TXT file over the treemble window and let it go. The names are applied immediately. |

After entering your tip names, you will see the entered names show up under the tip lables on the image when **Show Tree** is on. You can compare and check to make sure the names are correct.  If you see misspellings, you can fix them in the tip names editor window.  

**Tip:** You can press <kbd>Ctrl</kbd> + <kbd>Z</kbd> (or <kbd>⌘</kbd> + <kbd>Z</kbd> on macOS) to undo any mistakes you make in the tip names editor.

![Edit names screenshot](/img/Docs/Treemble_with_edit_tips.png)

## 2. Order and Name-Count

Treemble assigns names **top-to-bottom** (rectangular) or **clockwise** from the break point (circular).  

A warning appears on the tip count overlay in the upper right if *tip nodes ≠ name lines*.  
Fix by adding/removing nodes or editing the tip names list.

## 4. External Tools

> **Name Extractor GPT** (launch from within Treemble under **Help ▾**) can perform optical character recognition to read the species names from the figure into a ready-made TXT list that you can download. Try it out: [here](https://chatgpt.com/g/g-rwiIPwboh-tip-name-extractor).

When there are many tips in one figure, it is a good idea to zoom in and take screen shots of smaller chunks of the names and then assemble them. It is often close to perfect with higher resolution images with up to around 30-50 names.  Check the names carefully to verify.

There are also many other AI and non-AI OCR methods that are freely available on the internet.  As these methods are evolving rapidly, we do not attempt to provide a comprehensive list here.
