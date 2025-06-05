---
title: Diff Tip Names in a CSV File
---

Need to compare two name lists? Treemble can flag mismatches visually.

## 1. Prepare

* Load your tree image and tip-names list (`File ▾ → Load Tip Names…`).  
* Ensure nodes are placed.

## 2. Run Diff

`File ▾ → Diff Tip Names CSV File` → choose a second CSV containing a **tip name** column.

### What Happens

* Names from the diff file are **never inserted**.  
* Treemble sorts both lists by tip Y-coordinate (or angle in circular mode).  
* Unmatched names are prefixed with `⚠️⚠️⚠️ ` and appear in the *Tip Editor* window.

## 3. Resolving Flags

1. Open **Edit Tip Names** and correct the flagged lines.  
2. Re-diff if needed — only flags regenerate; original names remain intact.

---

### Tips

* Use this to sanity-check OCR outputs against a published species list.  
* A successful diff shows **no flags** and a green banner.