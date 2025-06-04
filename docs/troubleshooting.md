---
title: Troubleshooting
---

Common hiccups and quick fixes.

| Symptom | Cause | Fix |
|---------|-------|-----|
| **Image fails to load** | Unsupported file type | Convert to PNG/JPEG and retry |
| **Show Tree button disabled** | No root node | Add a root, then click *Show Tree* |
| **“Tip nodes ≠ name lines” banner** | Name list length mismatch | Add/remove nodes **or** edit TXT list |
| **Red circles on nodes** | *Free nodes* (disconnected) | Add missing internal nodes or drag into alignment |
| **Yellow rings on nodes** | Asymmetry exceeds threshold | Lower *Options → Asymmetry Threshold* **or** reposition nodes |
| **Branches offset from figure** | Incorrect scale or misplaced nodes | Re-Calibrate **or** drag nodes |
| **Newick modal won’t open** | Tree invalid or hidden | Click *Show Tree* and fix red/yellow issues first |
| **Calibration dialog never appears** | Second click missed the canvas | Cancel (`C`) and start calibration again |
| **Mouse drags canvas instead of nodes** | Wrong tool selected | Select *Tip/Internal/Root* first |

---

### Still Stuck?

*Check the **Help ▾ → About Treemble** modal for version info, then:*

1. Search or post in **GitHub Discussions**  
2. Open an issue with steps to reproduce  
3. Attach your image and (if possible) a saved CSV
