---
title: Showing the Tree & Fixing Problems
---

Once nodes are placed you can preview the reconstructed branches and resolve any mismatches.

## 1. Show / Hide Tree

*Click* **Show Tree**.  
Green branches should overlap the branches in the original figure.

![Nodes placed screenshot](/img/Docs/Treemble_with_nodes_on.png)

Treemble automatically calculates your tree's connectivity from the node locations and plots an overlay of the branches in green:

![Show tree screenshot](/img/Docs/Treemble_with_show_tree_but_not_tip_names.png)


## 2. Common Warnings

If you missed placing a node, the tree computing algorithm will fail to recreate the fully connected bifurcating tree.  Treemble will help you to find the location of the problem.

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


![Problems screenshot](/img/Docs/connection_problems.png)

The missing nodes *tend* to be near the shallowest node with a yellow ring.