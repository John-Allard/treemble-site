---
title: Internal Node Detection
---

Treemble now includes a **Detect Internal** feature that uses a deep learning image model specifically trained to identify internal nodes (branch points) in phylogenetic tree images.

## How It Works

The internal node detection model was trained on hundreds of phylogenetic tree images with human-labeled nodes. It has learned to recognize the visual patterns of branch points across many different tree styles and image qualities. It also tries to ignore extraneous lines and other visual elements that may overlap the tree, but very challenging images may still result in some incorrect node placements

### First-Time Setup

The first time you use the Detect Internal feature, Treemble will automatically download the model file (~100 MB) from Hugging Face. This is a one-time download—subsequent uses will load the model from your local cache.

## Using the Tool

1. Click the **Detect Internal** button in the toolbar (or press **N**)
2. Draw a rectangle around the tree branches
3. Release the mouse button—internal nodes will be placed at detected branch points

### Best Practices for Selection

The model has been trained to ignore distracting visual elements **within** the tree area, but it cannot distinguish between tree elements and other image content outside the tree. For best results:

- **Draw a tight rectangle around only the tree itself** avoid including legends, scale bars, labels, or other figure elements
- **Exclude the tips and root** from your selection when possible—focus on the branching region
- **Use multiple smaller selections** if your image has other visual elements near the tree that cannot be avoided
- For complex figures with multiple panels, select each tree individually

### Handling Challenging Images

Some images may be particularly difficult for the model, low resolution, unusual styling, or heavy annotations can affect detection accuracy. If the model places many nodes in incorrect locations:

1. Press **Ctrl+Z** (or **Cmd+Z** on macOS) to undo the detection and revert to your previous node state
2. Try a tighter or different selection area
3. Fall back to manual placement for that portion of the tree

## Keyboard Shortcut

| Key | Action |
|-----|--------|
| **N** | Toggle Internal Node Detection mode on/off |

---

> **Tip:** Combine automatic detection with manual refinement. Use Detect Internal to quickly place most nodes, then manually adjust any that need fine-tuning.
