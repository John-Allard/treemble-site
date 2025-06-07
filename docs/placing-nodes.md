---
title: Placing Nodes
---

Treemble lets you mark every **tip**, **internal**, and **root** node so it can reconstruct the full topology.

## 1. Select a Node Tool

| Tool | Toolbar Button | Purpose |
|------|----------------|---------|
| **Tip**      | <kbd>Tip</kbd> button | Terminal leaves |
| **Internal** | <kbd>Internal</kbd> button | Marks a splitting of branches |
| **Root**     | <kbd>Root</kbd> button | Single common ancestral node |

> **Tip:** Click the same button again to exit the tool. When no tool is selected you can click the left mouse button and drag to pan around the image (this always works for the right mouse button even when you are in a tool mode).

## 2. Add or Remove a Node

1. Move the cross-hair over the desired pixel location.  
2. Click once to **add** the node.  
3. Click the node again to **remove** it.

**Left click and drag* to fine-tune a node’s position.**

![Placing nodes screenshot](/img/Docs/all_but_one_node_placed.png)

## 3. Automatic Tip Detection

Bifurcating trees always have 2n - 1 nodes where n is the number of tips, so the tips are more than half of the nodes!  Treemble will automatically detect them for you and add tip dots at their locations. Just click **Detect Tips** in the tool bar and drag a rectangle around **only** the tips, then release the mouse button and node dots will appear. Don't include text or internal node locations in the selection rectangle.

![Placing nodes screenshot](/img/Docs/detect_tips_rectangle.png)

## 4. Equalize Tips

The Equalize Tips button will allow you to click a point on the image to set the X-axis coordinate of all tip nodes X-axis position.  This is useful if you are creating a newick for a time-calibrated tree that should ultrametric.

---

### Tips
* There can only be one root. If you click a second time with the root node tool, it will move the root to the new position.
* If your tips are not all at the same level, you can usually find some clusters of tips near each other and select them with the tip detet tool, but you can also add individual tips with the Tip tool.
* Treemble will correctly connect a parent node to its children as long as its Y-axis coordinate is between them.