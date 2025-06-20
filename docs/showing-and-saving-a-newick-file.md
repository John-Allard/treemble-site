---
title: Showing & Saving a Newick File
---

When your tree is valid Treemble can export standard Newick.

## 1. Open the Newick Modal

*Requirements:*  
* `Root` node exists  
* No disconnected nodes  
* Tip-name count matches tips

Click **Show Newick**. A modal shows the string.

![Newick modal screenshot](/img/Docs/newick_modal_showing.png)

## 2. Copy or Save

* **Copy** - Select the text and copy to your clipboard with <kbd>Ctrl</kbd> + <kbd>C</kbd> (or <kbd>⌘</kbd> + <kbd>C</kbd> on macOS).  
* **Save Newick** - press the **Save .nwk** button to download your newick file.

## 3. Cladograms vs Phylograms

If **Cladogram** mode is selected (via **Options ▾ Tree Type**), Treemble does not display branch-lengths in the Newick string.

When in **Phylogram mode** (default), The Newick display will warn you with alerts if the length has not been calibrated, if the tree is not ultrametric, or if tip names have not been added. If you are creating a tree for which these concerns are not applicable (e.g. a non-ultrametric tree, or one lacking tip names), you can simply ignore these warnings. 

If the scale has been calibrated and the tree is ultrametric, the Newick Modal will display the height of the root node in scaled units, allowing you to confirm visually that this matches expectations.

## 4. Troubleshooting

*Button disabled?* Hover it to see the reason (tooltip).  
Common cases: *tree hidden*, *free nodes*, or *tip mismatch*.
