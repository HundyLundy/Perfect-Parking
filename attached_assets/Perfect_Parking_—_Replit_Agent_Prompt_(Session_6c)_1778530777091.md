# Perfect Parking — Replit Agent Prompt (Session 6c)
## Nav Pillbox Styling + Label Updates + Marinas Fix

Please make the following 4 targeted changes. Read the relevant files before editing.

---

### Change 1 — Rename "Explore" dropdown button to "Parking Lot Owners"

In the Navbar component, find the button labeled "Explore" (the dropdown trigger). Change the visible label text to "Parking Lot Owners". Keep the dropdown chevron icon (▾) after the text. Do not change any other functionality or dropdown content.

---

### Change 2 — Style both "Parking Help" and "Parking Lot Owners" as matching navy outline pillboxes

In the Navbar component, apply the following styles to BOTH the "Parking Help" link AND the "Parking Lot Owners" dropdown button:

- Border: `1.5px solid #00305b` (navy)
- Border-radius: `9999px` (full pill)
- Padding: `6px 18px`
- Text color: `#00305b` (navy) on default state
- Background: transparent on default state
- On hover: background `#00305b`, text white
- Font size: `0.85rem` (slightly smaller than "Partner With Us")
- Font weight: `600`

These two pills should look identical to each other and clearly secondary to the gold "Partner With Us" button. The visual hierarchy is:

**Partner With Us** (gold, most prominent) → **Parking Help + Parking Lot Owners** (navy outline pills, secondary) → phone number (plain text)

Apply to both desktop nav and mobile nav. On mobile, the pills should stack cleanly in the hamburger menu.

Also — remove the "property owners" and "drivers" pill/badge labels from the top of the "Built for Owners / Designed for Drivers" section on the homepage if they exist as separate badge elements. The section headers are clear enough without them.

---

### Change 3 — Move Marinas from "Company" dropdown column to the Industries column

In the "Parking Lot Owners" dropdown mega-menu:

"Marinas" currently appears under the "Company" column. Move it to the column that contains the other industry links (Hotel Parking, Multifamily & HOA, Hospitals & CRE, etc.). Place it as the last item in that industries list.

Remove it from the Company column entirely.

---

### Change 4 — Remove Marinas from any non-industry locations

Search the codebase for any instances of "Marinas" or "marina" that appear outside of:
- The /industries page
- The dropdown industries column (after Change 3 above)
- The footer industries links (if present)

Remove from any other locations (standalone nav items, Company section, homepage sections, etc.).

---

### After all changes:

Push to GitHub with commit message: "Nav: pillbox styling, Parking Lot Owners label, Marinas fix"

Vercel will auto-deploy via the GH secret.

---

### What NOT to change:
- Do not touch dropdown content, links, or structure beyond what is specified
- Do not change "Partner With Us" styling
- Do not change homepage content beyond removing the property owner/driver badge labels if present
- Do not change /parkers page
- Do not change /industries page content
