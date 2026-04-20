# GA4 Conversion (Key Event) Setup Guide

## Property: G-97R1CNWWBE

The site already fires all the required events automatically. The steps below
configure the GA4 dashboard to treat `generate_lead` as a conversion so it
appears in conversion-rate reports and can sync with Google Ads.

---

## Option A — Automated Script (Recommended)

A script in `scripts/src/setup-ga4-key-events.ts` uses the Google Analytics
Admin API to mark `generate_lead` as a Key Event programmatically.

**Requirements:**
1. Find your GA4 **numeric property ID** (not the Measurement ID):
   - GA4 Admin → Property Settings → Property ID (e.g. `123456789`)
2. Obtain an OAuth2 access token with Analytics Administrator permissions:
   ```
   gcloud auth print-access-token
   ```
   Or generate one via a Google service account with the "Analytics
   Administrator" role on this property.

**Run the script:**
```bash
GA4_ACCESS_TOKEN=<your_token> GA4_PROPERTY_ID=<numeric_id> \
  pnpm --filter @workspace/scripts run setup-ga4-key-events
```

The script will list existing key events, skip any already marked, and create
`generate_lead` as a key event if it is missing. Output confirms success or
explains any errors.

---

## Option B — Manual Dashboard Steps

1. Go to [analytics.google.com](https://analytics.google.com) and open the
   **Perfect Parking** property (G-97R1CNWWBE).
2. In the left sidebar, click **Admin** (gear icon, bottom left).
3. Under the **Property** column, click **Events**.
4. Find **generate_lead** in the list, then toggle **Mark as key event** to ON.

> **Note:** `generate_lead` appears in the Events list after at least one form
> has been submitted successfully on the live site. If it is not visible yet,
> click **Create event**, name it `generate_lead`, save it, then mark it as a
> key event.

---

## Verify the Setup

1. Submit a test form on the live site.
2. In GA4, go to **Reports → Realtime** — `generate_lead` should appear within
   seconds.
3. After 24–48 hours, check **Reports → Acquisition → Traffic acquisition** —
   a **Key events** (Conversions) column should show conversion counts.

---

## Connect to Google Ads (Optional)

If running Google Ads campaigns:

1. In GA4 Admin → **Google Ads Links**, link the Ads account.
2. In Google Ads, import the `generate_lead` conversion under
   **Tools → Conversions → Import from Google Analytics**.

---

## How Events Are Implemented in Code

| Event | When It Fires | GA4 Status |
|---|---|---|
| `page_view` | Every page navigation | Standard — always tracked |
| `generate_lead` | Successful contact form submission | **Mark as Key Event** |

- **`src/lib/analytics.ts`** — central `trackEvent()` helper
- **`src/main.tsx`** — `initGA()` initializes GA4 on app load
- **`src/App.tsx`** — `trackPageView()` fires on every route change
- **`src/pages/Contact.tsx`** — fires `generate_lead` with `event_category: "contact"`
  and `event_label: <propertyType>` on successful form submission
- **`VITE_GA_MEASUREMENT_ID`** env var — must be set to `G-97R1CNWWBE`

### Automation Script

- **`scripts/src/setup-ga4-key-events.ts`** — GA4 Admin API script to mark
  key events programmatically
- **Run via:** `pnpm --filter @workspace/scripts run setup-ga4-key-events`
