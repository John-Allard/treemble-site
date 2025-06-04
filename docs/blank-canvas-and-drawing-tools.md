---
title: Blank Canvas & Drawing Tools
---

Besides tracing existing figures, Treemble lets you sketch trees from scratch.

## 1. Open a Blank Canvas

`File ▾ → Open Blank Canvas`  
Treemble loads a 2000 × 2000 px white sheet.

## 2. Draw Menu

A new **Draw ▾** dropdown appears:

| Option | Cursor | Use |
|--------|--------|-----|
| **Pencil**  | ✏️ | Freehand strokes |
| **Line**    | 📏 | Straight connectors |
| **Eraser**  | 🧽 | Circular erase tool |
| **Clear**   | 🗑️ | Wipe the sketch layer |

![Drawing tools screenshot](https://via.placeholder.com/800x400?text=UI+Overview)

### Shortcuts

| Action | Shortcut |
|--------|----------|
| Toggle Draw menu | `D` |
| Clear sketch layer | `Shift ⌘ K` (mac) / `Shift Ctrl K` |

## 3. Converting Sketch to Tree

After sketching:

1. Add **Tip/Internal/Root** nodes on top of your strokes.  
2. Click **Show Tree** — branches should match your lines.  
3. Proceed just like an imported image (tip names, Newick, etc.).
4. Detect tips should work to add tips automatically, as long as your tips are oriented to the right.

---

### Clearing the sketch vs clearing the canvas

*Clear* removes the sketch lines but not any nodes placed on the canvas. To clear the sketch *and* the nodes, simply choose `File ▾ → Open Blank Canvas` again.
