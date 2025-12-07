---
title: Blank Canvas & Drawing Tools
---

Besides tracing existing figures, Treemble lets you sketch trees from scratch. 

## 1. Open a Blank Canvas

`File ▾ → Open Blank Canvas`  
Treemble loads a 2000 × 2000 px white sheet where you can sketch a tree and place nodes.  This is useful to quickly generate a newick file with a certain topology in order to test phylogenetic hypotheses, etc.

## 2. Draw Menu

A new **Draw ▾** dropdown appears:

| Option | Cursor | Use |
|--------|--------|-----|
| **Pencil**  | ✏️ | Freehand strokes |
| **Line**    | 📏 | Straight lines |
| **Eraser**  | 🧽 | Circular erase tool |
| **Clear**   | 🗑️ | Wipe the sketch layer |

![Drawing tools screenshot](/img/Docs/blank_canvas_draw_mode.png)

### Undo / Redo for Drawing

When using the drawing tools (Pencil, Line, or Eraser), you can undo and redo your strokes:

- **Ctrl+Z** (or **Cmd+Z** on macOS): Undo the last drawing stroke
- **Ctrl+Y** (or **Shift+Cmd+Z** on macOS): Redo the last undone stroke


## 3. Converting Sketch to Tree

After sketching:

1. Add **Tip/Internal/Root** nodes on top of your strokes. 
2. Detect Tips should work to add tips automatically, as long as your tips are oriented to the right. 
3. Click **Show Tree** — branches should match your lines.  
4. Proceed just like an imported image (tip names, Newick, etc.).

---

### Clearing the sketch vs clearing the canvas

*Clear* removes the sketch lines but not any nodes placed on the canvas. To clear the sketch *and* the nodes, simply choose `File ▾ → Open Blank Canvas` again.
