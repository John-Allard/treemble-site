---
title: Circular Trees
---

Treemble supports radial (circular) diagrams in addition to rectangular ones.

## 1. Switch to Circular Mode

Open **Options → Tree Shape → Circular**.

![Circular options](https://via.placeholder.com/800x400?text=UI+Overview)

## 2. Define Centre & Break Point

1. Click **Center & Break**.  
2. **First click** = centre of the circle.  
3. **Second click** = break-point angle (the gap where labels start).

A banner confirms when both are set.

## 3. Place Nodes

*Tip, Internal, Root* tools work exactly the same, but Treemble stores positions as **polar coordinates** (radius r, angle θ).

## 4. Radial Labels

When you click **Show Tree**, tip labels auto-rotate to stay upright.

![Circular labels](https://via.placeholder.com/800x400?text=UI+Overview)

## 5. Equalize & Calibration

* **Equalize Tips** uses radial distance.  
* **Calibrate Scale** measures in *r* units from the centre.

---

### Gotchas

| Issue | Fix |
|-------|-----|
| Branches don’t match | Re-check centre & break point |
| Labels upside-down | Make sure break point isn’t inside the label arc |
