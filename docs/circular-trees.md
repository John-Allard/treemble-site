---
title: Circular Trees
---

Treemble supports radial (circular) tree diagrams in addition to rectangular ones. Half circular trees will also work!

## 1. Switch to Circular Mode

Open **Options → Tree Shape → Circular**.


## 2. Define Center & Break Point

You will need to indicate the center point and a break point. 

The breakpoint is used as the starting point for your tip name labels.  Names you enter will be assigned to tips starting with the one just clockwise from that point and continuing around in clockwise order.

1. Click the **Center & Break** button in the toolbar.  
2. **First click** = center of the circle.  An overlay helps you align with the circular branches.
3. **Second click** = break point angle (the gap in the branches).

A banner confirms when both are set.  A marker will indicate the break point on the screen and radial / angular cross hair overlay will replace the Cartesian one.

![Circular labels](/img/Docs/center_selection.png)

## 3. Place Nodes

*Tip, Internal, Root* tools work exactly the same, but Treemble stores positions as **polar coordinates** (radius r, angle θ). Automatic tip detection in circular tree mode will be added in a future verion of Treemble.

## 4. Radial Labels

When you click **Show Tree**, tip name labels are displayed radially in the typical fashion for circular phylogenetic trees, and are oriented so they should be slightly below the position of names on the image. If your tips are close together, it is possible that two labels will overlap at the very bottom of the tree. 

![Circular labels](/img/Docs/circular_tree.png)

## 5. Equalize & Calibration

* **Equalize Tips** uses radial distance.  
* **Calibrate Scale** measures in *r* units from the center.

Otherwise both features work the same as in rectangular trees.

---

## Gotchas

| Issue | Fix |
|-------|-----|
| Branches not overlapping the ones in the image | Re-check center & break point |
| calibration not giving correct node heights | Scale bars on circular trees are sometimes not oriented exactly radially |
| A chaotic mess of vertical line branches | You are in rectangular mode on a circular tree |
| name labels overlap at the bottom of the tree | drag one of the tips slightly until you can see the labels and check them|
