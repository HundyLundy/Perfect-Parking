# Perfect Parking — Replit Agent Prompt (Session 6 — May 11, 2026)

Paste this entire prompt into the Replit Agent for the Perfect Parking project.

---

## PROMPT TO PASTE:

I need you to make several changes to the Perfect Parking website. Please make all of these changes in one pass. Do not deploy until all changes are complete.

---

### CHANGE 1 — Add a "Parker Support" section to the homepage

Add a new section to the homepage, placed ABOVE the footer and BELOW the "Industries We Serve" section. This section is for parkers (people who are parking in our lots) — NOT for property owners.

**Design requirements:**
- Background: white or very light gray (`#F5F7FA`)
- Two columns, side by side, equal width
- Left column: "Are You a Parker?" block
- Right column: "Are You a Property Owner?" block
- Each column has a headline, one sentence of body copy, and a CTA button
- The two columns should feel equally prominent — same visual weight

**Left column — Parking Help block:**
- Small label above headline (gold `#DEC600`, uppercase, small caps): `PARKING HELP`
- Headline: `Need help with your parking session?`
- Body: `Get answers fast — no phone call needed.`
- Button: `Get Parking Help` → links to `/parkers` (this page does not exist yet — just link to it, we will build it separately)
- Button style: outlined, navy border and text (`#1965B1`), no fill

**Right column — Property Owner block:**
- Small label above headline (gold `#DEC600`, uppercase, small caps): `PROPERTY OWNERS`
- Headline: `Own a parking lot?`
- Body: `Find out how much your lot could earn — free, no commitment.`
- Button: `Get My Free Estimate` → links to `/estimate`
- Button style: filled gold (`#DEC600`), dark navy text (`#00305b`)

**Section padding:** 60px top and bottom. Max width 1200px, centered.

---

### CHANGE 2 — Add a `/parkers` page

Create a new page at the route `/parkers`. This is a standalone support page for people who parked in one of our lots.

**Page title (HTML `<title>`):** `Parking Help | Perfect Parking`
**Meta description:** `Get help with your Perfect Parking session — how to pay, extend time, get a receipt, or contact support.`

**Page content:**

Header section (navy background `#1965B1`, white text, centered):
- Headline: `Need Help With Your Parking Session?`
- Subheadline: `Everything you need to manage your parking session — no phone call needed.`

Video section (white background, centered):
- Section headline: `How to Park with Perfect Parking`
- Add an HTML5 video player using this tag:
```html
<video
  controls
  width="700"
  style="max-width: 100%; border-radius: 8px; display: block; margin: 0 auto;"
>
  <source src="/HowtoparkwithPerfectParking_Ungated.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```
- NOTE: The file `HowtoparkwithPerfectParking_Ungated.mp4` will be placed in the `public` folder of the Replit project by Hunter before deploying. Do not rename it.
- Below the video: one line of text — `Questions? Email us at support@perfectparking.com`

FAQ section (light gray `#F5F7FA` background):
- Section headline: `Frequently Asked Questions`
- Use an accordion component (same style as the city pages FAQ)
- Include these FAQ items:

**Q: How do I pay for parking?**
A: You can pay by scanning the QR code on the sign with your phone camera, texting the code on the sign to the number provided, or using the Perfect Parking app. No cash required.

**Q: What payment methods are accepted?**
A: We accept all major credit and debit cards. You can save your card in the app for faster checkout next time.

**Q: How do I get a receipt?**
A: Open your session in the app or web app, go to Past Sessions, and click "Need Receipt." Enter your email and we will send it to you.

**Q: How do I extend my parking session?**
A: Open your active session in the app or web app and tap "Extend Time." Choose your additional time, confirm payment, and your timer updates automatically.

**Q: I accidentally booked the wrong session or need a refund — what do I do?**
A: Email our support team at support@perfectparking.com. Include your name and the phone number you used to park. We handle all refund and cancellation requests by email.

**Q: I did not receive a confirmation text — what happened?**
A: The confirmation is sent to the phone number entered at checkout. If you did not receive it, the number may have been entered incorrectly. Email support@perfectparking.com and we will track it down for you.

**Q: How do I dispute a charge or ticket?**
A: Email support@perfectparking.com with your name, phone number, and a brief description of the issue. Our team responds within one business day.

**Q: What are your business hours?**
A: Our support team is available Monday through Friday, 8:00 AM to 6:00 PM local time. For urgent issues outside business hours, email support@perfectparking.com and we will follow up first thing.

CTA section (navy background `#1965B1`, white text, centered):
- Headline: `Still need help?`
- Body: `Our support team is standing by.`
- Button: `Email Support` → `mailto:support@perfectparking.com`
- Button style: gold fill (`#DEC600`), dark navy text (`#00305b`)

---

### CHANGE 3 — Add the `/parkers` page to the site router and navigation

Make sure `/parkers` is registered as a route in the app so it does not 404.

**Main top navigation:** Add "Parking Help" as the LAST item in the main header nav (after FAQ and About), before the "Get a Free Estimate" button. Link it to `/parkers`.

**Footer:** Add it to the footer as well, under a new footer column called "Parking Help" with a single link: "Parking Help" → `/parkers`.

**FAQPage JSON-LD schema on `/parkers`:** Add the following JSON-LD script tag in the `<head>` of the `/parkers` page so Google can index individual FAQ answers:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I pay for parking?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can pay by scanning the QR code on the sign with your phone camera, texting the code on the sign to the number provided, or using the Perfect Parking app. No cash required."
      }
    },
    {
      "@type": "Question",
      "name": "What payment methods are accepted?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We accept all major credit and debit cards. You can save your card in the app for faster checkout next time."
      }
    },
    {
      "@type": "Question",
      "name": "How do I get a receipt?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Open your session in the app or web app, go to Past Sessions, and click Need Receipt. Enter your email and we will send it to you."
      }
    },
    {
      "@type": "Question",
      "name": "How do I extend my parking session?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Open your active session in the app or web app and tap Extend Time. Choose your additional time, confirm payment, and your timer updates automatically."
      }
    },
    {
      "@type": "Question",
      "name": "I accidentally booked the wrong session or need a refund — what do I do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Email our support team at support@perfectparking.com. Include your name and the phone number you used to park. We handle all refund and cancellation requests by email."
      }
    },
    {
      "@type": "Question",
      "name": "I did not receive a confirmation text — what happened?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The confirmation is sent to the phone number entered at checkout. If you did not receive it, the number may have been entered incorrectly. Email support@perfectparking.com and we will track it down for you."
      }
    },
    {
      "@type": "Question",
      "name": "How do I dispute a charge or ticket?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Email support@perfectparking.com with your name, phone number, and a brief description of the issue. Our team responds within one business day."
      }
    },
    {
      "@type": "Question",
      "name": "What are your business hours?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our support team is available Monday through Friday, 8:00 AM to 6:00 PM local time. For urgent issues outside business hours, email support@perfectparking.com and we will follow up first thing."
      }
    }
  ]
}
</script>
```

---

### CHANGE 4 — Verify and fix the `/estimate` form dual-call pattern

Check the current `/estimate` page form submission handler. It should be making TWO sequential API calls on submit:

**CALL 1 — POST to GHL Contacts API:**
```
POST https://services.leadconnectorhq.com/contacts/
Headers:
  Authorization: Bearer pit-1bce996a-1890-4120-8fe3-efa0c65ea572
  Version: 2021-07-28
  Content-Type: application/json
Body:
{
  "locationId": "ZF2Qjd4J1GmT9w5XbinN",
  "firstName": <name field value>,
  "phone": <phone field value>,
  "tags": ["paid-ad-estimate"],
  "customFields": [
    {"key": "address", "field_value": <address field value>},
    {"key": "parking_spaces", "field_value": <spaces field value>}
  ]
}
```

**CALL 2 — POST to existing webhook:**
```
POST https://services.leadconnectorhq.com/hooks/ZF2Qjd4J1GmT9w5XbinN/webhook-trigger/KkGW9R8Rqu2pZUvyYS6P
(keep existing body as-is)
```

If both calls are already implemented, do nothing. If only the webhook exists, add Call 1 before it. Show success message if Call 1 succeeds, regardless of Call 2 result.

---

### CHANGE 5 — Fix the city page URL format issue

Check if any city pages are accessible at URLs with a state suffix (e.g., `/locations/corpus-christi-tx`). If the router currently handles only `/locations/corpus-christi` (no state suffix), add a redirect: any request to `/locations/:city-tx` should redirect to `/locations/:city` (strip the `-tx` suffix). This fixes soft 404s that Google may have indexed.

---

After all changes are complete, confirm what was done and push to GitHub. Do not deploy separately — the GitHub push will trigger the Vercel auto-deploy.
