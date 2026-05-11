# Perfect Parking — Replit Agent Prompt (Session 6b — Nav + Homepage Restructure)

Paste this entire prompt into the Replit Agent for the Perfect Parking project.

---

## PROMPT TO PASTE:

I need you to make two major changes to the Perfect Parking website: (1) restructure the navigation bar, and (2) clean up and streamline the homepage. Please read all relevant files before making any changes, then execute everything in one pass.

---

## CHANGE 1 — Navigation Bar Restructure

The current nav is too crowded. Restructure it to match this design:

### Top bar (always visible, left to right):
1. Logo (left-aligned, unchanged)
2. **Parking Help** — links to `/parkers`
3. **Explore ▾** — a dropdown button (chevron icon) that opens a styled mega-menu (see design below)
4. Spacer / flex-grow
5. **(361) 585-1111** — phone number link (tel:)
6. **Partner With Us** — gold CTA button (`#DEC600`, dark navy text `#00305b`), links to `/estimate`

Remove from the always-visible top bar: Solutions, Industries, Case Studies, Education, Locations, FAQ, About. Move all of these into the Explore dropdown.

### Explore dropdown design (reference: perfectwatervalve.com "Explore" dropdown):
- Opens on click (not hover)
- Full-width or wide panel, dark navy background (`#00305b`), white text
- Organized into 3 columns:

**Column 1 — Solutions**
- How It Works → `/how-it-works` (or existing anchor)
- Industries We Serve → `/industries`
- Case Studies → `/case-studies`
- Education Hub → `/education`

**Column 2 — Company**
- About Us → `/about`
- FAQ → `/faq`
- Locations → `/locations`
- Marinas → `/industries/marinas` *(add this — see Change 3 below)*

**Column 3 — Get Started**
- Partner With Us → `/estimate`
- Parking Help → `/parkers`
- Contact Us → `mailto:info@perfectparking.com`

- Each column has a small gold (`#DEC600`) uppercase label at the top
- Links are white, 15px, with a subtle gold underline or left-border accent on hover
- Dropdown closes when user clicks outside or clicks a link
- On mobile: collapse to a hamburger menu that opens a full-screen slide-in panel with the same links listed vertically

---

## CHANGE 2 — Homepage Restructure

The homepage is too long and repetitive. Keep the best sections, remove the redundant ones, and add navigation links at the bottom of key sections. Here is the exact new section order:

### KEEP (in this order):
1. **Hero** — unchanged
2. **Stats bar** (3 metrics: revenue range, setup timeline, owner hours) — unchanged
3. **How It Works** (4-step process) — unchanged
4. **Automated Revenue System video section** — unchanged
5. **Real Results** (the Wimberley case study) — unchanged, but add a link at the bottom: `See all case studies →` linking to `/case-studies`
6. **Built for Owners / Designed for Drivers** — keep both columns, but:
   - At the bottom of the "Built for Owners" column, add: `Explore industries and case studies →` linking to `/industries`
   - At the bottom of the "Designed for Drivers" column, add: `Get parking help →` linking to `/parkers`
   - **Remove** the separate "Parking Help / Property Owners" two-column section that was added in the previous session — this replaces it
7. **What's Your Parking Worth** (revenue tier cards: 50 spaces / 100 spaces / 200+ spaces) — keep, unchanged
8. **Military Warriors Support Foundation** — move to just above the footer (last section before footer)
9. **Footer** — unchanged

### REMOVE from homepage (content is preserved on sub-pages):
- "Not all parking management is equal" comparison table section — remove
- "Built on a Real Operating System" technology section — remove
- "Platform Preview / See How It Works" portal screenshots section — remove
- "Everything managed from one platform" app download section — remove
- "Industries We Serve" section — remove (covered on /industries page)

Do NOT delete any of these sections from the codebase — just remove them from the homepage render. They may already exist on sub-pages or can be added there later.

---

## CHANGE 3 — Add Marinas to Industries

In the Industries page (`/industries` or wherever industry types are listed), add **Marinas & Boat Ramps** as an industry type. Use this content:

**Headline:** Marinas & Boat Ramps
**Body:** Seasonal and weekend traffic at marinas creates consistent, predictable parking demand. Perfect Parking handles payment collection, enforcement, and reporting — so you earn from every launch, every weekend, without adding staff.
**Icon or emoji placeholder:** ⚓ (use a boat/anchor icon if available in the icon set, otherwise use text)

Also add "Marinas" to the Industries dropdown in the Explore menu (Column 2, as noted above).

---

## CHANGE 4 — Footer Parking Help column cleanup

The "Parking Help" footer column currently has only one link and looks awkward. Expand it to 3 links:

- Parking Help → `/parkers`
- FAQ → `/faq`
- Contact Support → `mailto:support@perfectparking.com`

---

After all changes are complete, confirm what was done and push to GitHub using the `GH` secret. Do not deploy separately — the GitHub push triggers Vercel auto-deploy.
