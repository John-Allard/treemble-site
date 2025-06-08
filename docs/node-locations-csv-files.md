---
title: Node-Locations CSV Files
---

Treemble can save and restore every node’s coordinates (and tip names) to/from a CSV. The format uses a header row, followed by one row per node. For example:

    x, y, type, name

- **x** and **y** are pixel coordinates in the original image’s resolution.
- **type** is one of `tip`, `internal`, or `root`.
- **name** appears only for rows where `type` is `tip`; otherwise it remains empty.

## 1. Save a CSV

Click **File ▾ → Save CSV**. Treemble generates data in this format:

| x     | y     | type    | name             |
|-------|-------|---------|------------------|
| 345.4 | 812.1 | tip     | Homo sapiens     |
| 301.0 | 502.6 | internal |                 |
| 122.6 | 791.3 | root    |                  |
| 420.2 | 650.8 | tip     | Pan troglodytes  |

Rows appear in the order you placed the nodes. 

## 2. Load a CSV

Click **File ▾ → Load CSV** and select a file with this schema. You can also drag and drop a CSV file onto the window. Treemble will:

1. Re-create each node at the given `(x, y)` coordinates and assign the proper `type`.
2. For every `tip` row, assign the `name` field as the tip label, if the CSV file contained names.
3. If you already had nodes placed, and you load a CSV via dragging and dropping the file, a dialog will first ask if you want to replace the existing data. You will also have to option to perform a [diff](/docs/diff-tip-names-in-a-csv-file).
