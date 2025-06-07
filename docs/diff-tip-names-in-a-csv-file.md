---
title: Diff Tip Names in a CSV File
---

Need to compare two name lists? Treemble can flag mismatches visually.

## 1. Prepare

* Load your tree image and tip-names list (`File ▾ → Load Tip Names…`).  
* Ensure nodes are placed.

## 2. Run Diff

`File ▾ → Diff Tip Names CSV File` → choose a CSV containing a **tip name** column.

You can also drag and drop a CSV file onto the window where you already have names entered and you will have the option to Diff.

### What Happens

* Names from the diff file are **never inserted**.  
* Treemble sorts both lists by tip Y-coordinate (or angle in circular mode) and compares them.  
* Unmatched names are prefixed with `⚠️⚠️⚠️ ` and this will appear in the *Tip Editor* window and on the overlay name labels in Show Tree mode.

## 3. Resolving Flags

1. Open **Edit Tip Names** and simply delete the warning flag symbols once you have ensured that the name is correct.  
2. Re-diff if needed — only flags regenerate; original names remain intact.

---

### Tips

* After adding your names from one OCR method, you can first save the CSV, then load another tip names TXT file from a *different ORC method* then drag and drop the CSV you just saved and choose diff. You can then focus on checking names where they did not agree.
* A successful diff shows **no flags** and a green banner.