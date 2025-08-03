---
title: Manual Connections & Polytomies
---

Treemble allows you to manually define connections between nodes.  This capability enables two major use-cases:

1. Quickly fixing mis-inferred parent–child relationships (which will only happen in images with distorted or freeform edges).
2. Constructing **polytomies** (nodes with 3-plus children) and working in **Freeform** mode, where Treemble’s automatic topology algorithm is disabled.

---

## Adding / Editing a Connection

1. **Hold** <kbd>Shift</kbd>.
2. **Left-click** an *child* node.
3. A dashed green line follows the cursor.  Hover over the intended *parent* node (older / closer to the root).
4. **Left-click** the parent to finalise the edge.

The dashed line persists to visualise the link.

> Tip: All standard editing applies; drag nodes, click to delete the node and its manual connections, etc.

### Creating Polytomies

By assigning **three or more children to the same parent** you define a *polytomy*.

Treemble’s reconstruction algorithm normally assumes bifurcations (two children per internal node).  Manual connections let you override this assumption where required by your source figure.

---

## Freeform Tree Shape

Select **Freeform** in **Options ▸ Tree Shape** to disable Treemble’s automatic reconstruction entirely.

In Freeform mode:

* **No algorithmic layout** – branches are plotted as straight lines between the exact node positions you provide.
* **Euclidean distances** are used; there is no specified time axis.
* **Any node can be a parent** of any other; the root may be anywhere.
* Tip name labels are applied in the order the tips appear down the page.
* The **Equalize Tips** tool is disabled.
* Manual connections (Shift-click) are the primary way to build the topology—including polytomies.

Freeform is ideal for unconventional tree illustrations, network-like diagrams, or exploratory sketches where formal time calibration is unnecessary.

---

## See Also

* [Options Dialog](/docs/options) – enable *Freeform* under *Tree Shape*.
* [Placing Nodes](/docs/placing-nodes) – general node-editing workflow.
