---
title: Node-Locations CSV Files
---

Treemble can save and restore every node’s coordinates (and tip names) to/from a CSV. The format uses a header row, followed by one row per node. For example:

    x,y,type,name

- **x** and **y** are pixel coordinates in the original image’s resolution.
- **type** is one of `tip`, `internal`, or `root`.
- **name** appears only for rows where `type` is `tip`; otherwise it remains empty.

## 1. Save a CSV

Click **File ▾ → Save CSV**. Treemble generates text such as:

    x,y,type,name
    345.4,812.1,tip,Homo sapiens
    301.0,502.6,internal,
    122.6,791.3,root,
    420.2,650.8,tip,Pan troglodytes

- Rows appear in the exact order you placed the nodes.
- Tip names are matched top-to-bottom (rectangular mode) or anticlockwise from the break point (circular mode) before being inserted into the `name` column.

![Save CSV placeholder](https://via.placeholder.com/800x400?text=Save+CSV)

## 2. Load a CSV

Click **File ▾ → Load CSV** and select a file with this same schema. Treemble will:

1. Clear all existing nodes.
2. Re-create each node at the given `(x, y)` coordinates and assign the proper `type`.
3. For every `tip` row, assign the `name` field as the tip label.

If the CSV was saved from a differently sized image, Treemble will warn you and refuse to load.

![Load CSV placeholder](https://via.placeholder.com/800x400?text=Load+CSV)
