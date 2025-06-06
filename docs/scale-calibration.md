---
title: Scale Calibration
---

Convert pixel distances into real-world branch lengths or divergence times.

## 1. Launch Calibration

Click **Calibrate Scale** in the toolbar.  
A banner prompts you to pick two calibration points.

## 2. Pick Points

1. **Click the first point** (e.g., left end of a scale bar).  
2. **Click the second point** (right end).  
   *A live X/radius read-out appears while you move the cursor.*

## 3. Enter Distance

A dialog asks “Enter the length represented by the selected interval”  
Enter a **numeric value**.  The units are treated as arbitrary but could represent millions of years, substitutions per site, etc.

![Calibration screenshot](/img/Docs/calibration.png)

## Behind the Scenes

| Tree Shape | What Treemble Stores |
|------------|----------------------|
| *Rectangular* | Δ X between clicks |
| *Circular*    | Δ radius from centre |

Treemble records the conversion in **units per pixel**. All branch-length tokens generated in the Newick will be properly scaled.

---

### Tips

* Calibrate **after** zooming in to get a more accurate placement. 
* It is best to click points that are as far apart as you can, to minimize error.
* Treemble scaled distances are usually within ~0.1% of their original values.
* For images without a scale bar, you can click two nodes if you know the distance between them.
