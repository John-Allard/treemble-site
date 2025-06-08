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

Tip: By pressing the <kbd>S</kbd> key repeatedly, you can flash the branch overlays on and off, making it easy to confirm that the recreated tree fully overlaps the tree in the image.

## 2. Fixing Problems

If you missed placing a node, the tree computing algorithm will fail to recreate the fully connected bifurcating tree.  Treemble will help you to find the location of the problem.

![Problems screenshot](/img/Docs/connection_problems.png)

After placing node dots at any locations you missed, so that the tree is valid, the green tree branch tree will automatically snap into place and should fully overlap the original image. 

## 3. Warnings

| Indicator | Meaning | Typical Fix |
|--------------|---------|-------------|
| 🔴 **Red rings** around nodes | One or more nodes are disconnected  | Add missing nodes or remove extra nodes so the tree is valid |
| 🟡 **Yellow rings** around nodes | Asymmetrical internal node(s) | Missing nodes *tend* to be near the shallowest asymmetrical node |
| ⚠️ **Tip mismatch** (this appears under the tip count overlay)  | Count of tip nodes ≠ tip names lines | make sure there is one tip name for each real tip |

## 4. Free-Node Rings

Red rings highlight nodes that are missing either a parent or one or both child nodes (for internal nodes). Nodes will only be disconnected if there are missing or extra nodes somewhere on the tree, but the node(s) that end up disconnected could be far from the location of the missing or extra node. It is often easy to see where a node is missing because the other branches will all be covered with Treemble's green overlays.

## 5. Asymmetry Highlighting

In typical rectangular phylogenetic tree figures, internal nodes are located at Y-axis coordinates that are equidistant from their two children. Treemble makes use of this fact to help with locating node placement problems by showing a yellow ring around internal nodes with distorted symmetry. Look around for a missed node location, or extra tip node, or other problems near the yellow marked nodes. The *shallowest* node with a yellow ring is often (but not necessarily always) the closest to the problem location.

In rare cases of trees with many asymmetrically positioned internal nodes, you can set the sensitivity threshold for asymmetry warnings to a high number to turn off this feature (under **Options**).



