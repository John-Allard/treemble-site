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

A dialog asks “How many units separate these points?”  
Enter a **numeric value** (Treemble ignores units strings).

![Calibration screenshot](https://via.placeholder.com/800x400?text=UI+Overview)

## Behind the Scenes

| Tree Shape | What Treemble Stores |
|------------|----------------------|
| *Rectangular* | Δ X between clicks |
| *Circular*    | Δ radius from centre |

Treemble records the conversion in **pixels per unit**. All branch-length tokens generated in Newick will be properly scaled.

---

### Tips

* Calibrate **after** zooming; calibration is resolution-independent.  
* For images without a scale bar, use two tips whose distance you know.
