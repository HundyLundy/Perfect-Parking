# Replit Agent Prompt — Perfect Parking Nav Update
**File to edit:** `src/components/layout/Navbar.tsx`

---

## CHANGES REQUIRED

### 1. Rename Pillbox 1: "Parking Help" → "Parking Help ↗"
- **Current label:** `Parking Help`
- **New label:** `Click Here for Parking Help`
- **Link stays the same:** `/parkers`
- Apply to BOTH desktop nav (line ~113) and mobile nav (line ~249)

---

### 2. Rename Pillbox 2: "Parking Lot Owners" → "More Info for Lot Owners"
- **Current label:** `Parking Lot Owners`
- **New label:** `More Info for Lot Owners`
- The dropdown menu stays exactly the same — do NOT change any dropdown links or items
- Apply to BOTH desktop nav (line ~122) and mobile nav (line ~259)

---

### 3. Add a NEW third pillbox: "Would Perfect Parking Work for You?"
- **Label:** `Would Perfect Parking Work for You?`
- **Link:** `/contact`
- Style it identically to the existing "Parking Help" pill (navy outline, same font, same padding, same border radius)
- Insert it between the "More Info for Lot Owners" dropdown and the phone number `(361) 585-1111`
- Apply to BOTH desktop nav and mobile nav

---

### 4. Fix "Contact Us" in the dropdown — change from mailto: to /contact
- **Current:** `{ name: "Contact Us", href: "mailto:info@perfectparking.com" }`
- **New:** `{ name: "Contact Us", href: "/contact" }`
- This is in the `exploreColumns` array or equivalent nav data structure
- The `/contact` page already exists and is live — just update the href

---

### 5. Fix "Partner With Us" gold CTA button — change from /estimate to /contact
- **Current:** `href="/estimate"` on the gold "Partner With Us" button (desktop, line ~205, and mobile, line ~307)
- **New:** `href="/contact"`
- The gold button label stays "Partner With Us"
- Apply to BOTH desktop and mobile versions

---

## DO NOT CHANGE
- The dropdown menu items under "More Info for Lot Owners" — leave all links exactly as they are
- The phone number `(361) 585-1111` and its position
- Any page content outside the Navbar component
- The `/estimate` page itself — it stays live, just remove nav links pointing to it
- Any form logic, webhook URLs, or submit handlers

---

## SUMMARY OF CHANGES
| Element | Before | After |
|---|---|---|
| Pillbox 1 label | `Parking Help` | `Click Here for Parking Help` |
| Pillbox 2 label | `Parking Lot Owners` | `More Info for Lot Owners` |
| New Pillbox 3 | (none) | `Would Perfect Parking Work for You?` → `/contact` |
| Contact Us dropdown link | `mailto:info@perfectparking.com` | `/contact` |
| Partner With Us gold button | `/estimate` | `/contact` |
