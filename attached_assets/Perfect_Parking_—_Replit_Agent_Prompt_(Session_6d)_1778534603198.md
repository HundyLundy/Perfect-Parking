# Perfect Parking — Replit Agent Prompt (Session 6d)
## Fix Marinas Nav Treatment + Consistent Dropdown Sub-Links

The current dropdown has a problem: "Marinas & Boat Ramps" is being displayed as a special indented sub-item under "Industries We Serve" in the Solutions column. This is wrong. Marinas is not more important than Hotels, Multifamily, or any other industry — it should be treated exactly the same as every other industry link.

Please make the following changes to the Navbar component:

---

### Change 1 — Remove the special sub-item treatment for Marinas

In the Solutions column of the "Parking Lot Owners" dropdown:

Remove the indented/sub-item rendering for "Marinas & Boat Ramps". It should NOT have a "↳" prefix, smaller text, dimmer color, or any visual treatment that makes it look like a child of "Industries We Serve".

---

### Change 2 — Two options for the Industries We Serve section in the dropdown (pick Option B)

**Option A (what we have now — wrong):** "Industries We Serve" is a link, and only Marinas gets a sub-link under it. This is inconsistent and makes Marinas look special.

**Option B (correct):** Either ALL industries get their own sub-link under "Industries We Serve", OR none of them do. Since we have 5 industries (Hotels & Resorts, Multifamily & HOA, Hospitals & CRE, Marinas & Boat Ramps, and any others on the /industries page), implement it this way:

In the Solutions column, show "Industries We Serve" as a top-level link (pointing to /industries), followed by ALL industry sub-links listed equally beneath it with consistent styling:
- Hotels & Resorts → /industries/hotels
- Multifamily & HOA → /industries/multifamily
- Hospitals & CRE → /industries/hospitals
- Marinas & Boat Ramps → /industries/marinas

All four sub-links must have IDENTICAL styling — same font size, same color, same indentation, same hover behavior. No industry is more or less prominent than another.

If this makes the Solutions column too long, remove the sub-links entirely and just keep "Industries We Serve" as a single link to /industries. That is cleaner than having only some industries listed.

---

### Change 3 — Apply the same sub-link logic to other sections (if applicable)

While you are in the dropdown, check if other top-level links in the dropdown (How It Works, Case Studies, Education Hub) have sub-pages that would benefit from the same sub-link treatment. If yes, add them consistently. If no obvious sub-pages exist, leave those sections as single links.

Do NOT add sub-links to the Locations section — there is no reason to list individual cities in the navigation menu.

---

### Change 4 — Verify footer consistency

In the footer Solutions column, make sure "Marinas & Boat Ramps" is listed with the same styling as Hotels, Multifamily, and Hospitals. No special treatment.

---

### After all changes:

Push to GitHub with commit message: "Nav: consistent industry sub-links, remove special Marinas treatment"

Vercel will auto-deploy via the GH secret.

---

### What NOT to change:
- Do not change the pillbox styling on "Parking Help" or "Parking Lot Owners"
- Do not change "Partner With Us"
- Do not change the homepage content
- Do not change the /industries page
- Do not change the /parkers page
- Do not add city links to the Locations section
