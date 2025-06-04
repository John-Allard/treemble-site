---
title: Showing the Tree & Fixing Problems
---

Once nodes are placed you can preview the reconstructed branches and resolve any mismatches.

## 1. Show / Hide Tree

*Click* **Show Tree**.  
Green branches should overlap the branches in the original figure.

![Show tree screenshot](https://via.placeholder.com/800x400?text=UI+Overview)

## 2. Common Warnings

| Banner Color | Meaning | Typical Fix |
|--------------|---------|-------------|
| 🔴 **Red** (error)   | One + nodes are disconnected (`free nodes`) | Add / move internal nodes |
| 🟡 **Yellow rings**  | Asymmetrical internal node(s) ≥ threshold | Adjust node positions |
| ⚠️ **Tip mismatch**  | Count of tip nodes ≠ tip names lines | Add/remove names or nodes |

## 3. Free-Node Rings

Red rings highlight nodes not connected in a single spanning tree.  
Use **drag-to-reposition** or add missing parent nodes.

## 4. Asymmetry Highlighting

Treemble marks highly unbalanced internal nodes in yellow. Look around for a missed node location, or extra tip node, or other problems near the yellow marked nodes, because assymetry is usually caused by distortion due to incorrect connections. The sensitivity threshold for asymmetry warnings is configurable under **Options**.

## 5. Fixing Problems

After placing node dots at any locations you missed, so that the tree is valid, the green tree branch tree will automatically snap into place and should fully overlap the original image. 
