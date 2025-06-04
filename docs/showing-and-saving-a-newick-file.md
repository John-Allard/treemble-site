---
title: Showing & Saving a Newick File
---

When your tree is valid Treemble can export standard Newick.

## 1. Open the Newick Modal

*Requirements:*  
* `Root` node exists  
* No free nodes  
* Tip-name count matches tips

Click **Show Newick**. A modal shows the string.

![Newick modal screenshot](https://via.placeholder.com/800x400?text=UI+Overview)

## 2. Copy or Save

* **Copy** — click anywhere in the textarea and press <kbd>Ctrl C</kbd>/<kbd>⌘ C</kbd>.  
* **Save .nwk** — press the **Save** button to download `basename.nwk`.

## 3. Cladograms vs Phylograms

If **Cladogram** mode is selected (via **Options ▾ Tree Type**), Treemble strips branch-length tokens automatically.

## 4. Troubleshooting

*Button disabled?* Hover it to see the reason (tooltip).  
Common cases: *tree hidden*, *free nodes*, or *tip mismatch*.
