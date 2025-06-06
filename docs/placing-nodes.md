---
title: Placing Nodes
---

Treemble lets you mark every **tip**, **internal**, and **root** node so it can reconstruct the full topology.

## 1. Select a Node Tool

| Tool | Toolbar Button | Purpose |
|------|----------------|---------|
| **Tip**      | <kbd>Tip</kbd> button | Terminal leaves |
| **Internal** | <kbd>Internal</kbd> button | Branch-point nodes |
| **Root**     | <kbd>Root</kbd> button | Single root anchor |

> **Tip:** Click the same button again to exit the tool. When no tool is selected you can click the left mouse button and drag to pan around the image (this always works for the right mouse button even when you are in a tool mode).

## 2. Add or Remove a Node

1. Move the cross-hair over the desired pixel location.  
2. Click once to **add** the node.  
3. Click the node again to **remove** it.

![Placing nodes screenshot](/img/Docs/all_but_one_node_placed.png)

## 3. Automatic Tip Detection

Bifurcating trees always have 2n - 1 nodes where n is the number of tips, so the tips are more than half of the nodes!  Treemble will automatically detect them for you and add tip dots at their locations.  Just click **Detect Tips** in the tool bar and drag a rectangle around the tips.

![Placing nodes screenshot](/img/Docs/detect_tips_rectangle.png)

## 4. Equalize Tips

The Equalize Tips button will allow you to click a point on the image to set all tip nodes to that X-axis position.  This is useful if you are creating a newick for a time-calibrated tree that should ultrametric.

## 5. Dragging Nodes

*Left click and drag* to fine-tune a node’s position.

## 6. Keyboard Shortcut

| Action | Shortcut |
|--------|----------|
| Toggle between **Tip / Internal / Root** tools | `T`, `I`, `R` |

---

### Troubleshooting

* **Accidentally placed the wrong type?** Click it again to remove it.  
* **Root required:** Treemble will not draw branches until a root node exists.
