/**
 * GA4 Key Event Setup Script
 *
 * Marks the `generate_lead` event as a Key Event (conversion) in the GA4
 * property G-97R1CNWWBE using the Google Analytics Admin API v1beta.
 *
 * Usage:
 *   GA4_ACCESS_TOKEN=<oauth2_token> pnpm --filter @workspace/scripts run setup-ga4-key-events
 *
 * Obtaining an access token:
 *   gcloud auth print-access-token
 *   OR use a service account key with the "Analytics Administrator" role on
 *   the GA4 property, then exchange it for an access token via the Google
 *   OAuth2 token endpoint.
 *
 * Required GA4 property ID: 97R1CNWWBE → numeric property ID needed below.
 * GA4 Measurement ID G-97R1CNWWBE maps to a numeric property ID that can be
 * found in GA4 Admin → Property Settings → Property ID (e.g. "123456789").
 * Set GA4_PROPERTY_ID env var to that numeric value.
 */

const GA4_ADMIN_BASE = "https://analyticsadmin.googleapis.com/v1beta";
const KEY_EVENTS_TO_CREATE = ["generate_lead"];

async function getHeaders(): Promise<Record<string, string>> {
  const token = process.env.GA4_ACCESS_TOKEN;
  if (!token) {
    throw new Error(
      "GA4_ACCESS_TOKEN environment variable is required.\n" +
        "Run: gcloud auth print-access-token\n" +
        "Then: GA4_ACCESS_TOKEN=<token> pnpm --filter @workspace/scripts run setup-ga4-key-events"
    );
  }
  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
}

function getPropertyId(): string {
  const id = process.env.GA4_PROPERTY_ID;
  if (!id) {
    throw new Error(
      "GA4_PROPERTY_ID environment variable is required.\n" +
        "Find it in GA4 Admin → Property Settings → Property ID (numeric).\n" +
        "The Measurement ID G-97R1CNWWBE maps to a different numeric property ID."
    );
  }
  return id;
}

async function listExistingKeyEvents(
  propertyId: string,
  headers: Record<string, string>
): Promise<string[]> {
  const eventNames: string[] = [];
  let pageToken: string | undefined;

  do {
    const url = new URL(`${GA4_ADMIN_BASE}/properties/${propertyId}/keyEvents`);
    url.searchParams.set("pageSize", "200");
    if (pageToken) url.searchParams.set("pageToken", pageToken);

    const res = await fetch(url.toString(), { headers });

    if (!res.ok) {
      const body = await res.text();
      throw new Error(
        `Failed to list key events (HTTP ${res.status}): ${body}`
      );
    }

    const data = (await res.json()) as {
      keyEvents?: Array<{ eventName: string; name: string }>;
      nextPageToken?: string;
    };

    for (const event of data.keyEvents ?? []) {
      eventNames.push(event.eventName);
    }

    pageToken = data.nextPageToken;
  } while (pageToken);

  return eventNames;
}

async function createKeyEvent(
  propertyId: string,
  eventName: string,
  headers: Record<string, string>
): Promise<void> {
  const url = `${GA4_ADMIN_BASE}/properties/${propertyId}/keyEvents`;
  const res = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify({ eventName }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(
      `Failed to create key event "${eventName}" (HTTP ${res.status}): ${body}`
    );
  }

  const data = (await res.json()) as { name: string; eventName: string };
  console.log(`  Created key event: ${data.eventName} (resource: ${data.name})`);
}

async function main(): Promise<void> {
  console.log("=== GA4 Key Event Setup ===");
  console.log(`Property Measurement ID: G-97R1CNWWBE`);
  console.log(`Events to mark as Key Events: ${KEY_EVENTS_TO_CREATE.join(", ")}`);
  console.log();

  const propertyId = getPropertyId();
  const headers = await getHeaders();

  console.log(`Fetching existing key events for property ${propertyId}...`);
  const existing = await listExistingKeyEvents(propertyId, headers);
  console.log(
    `Existing key events: ${existing.length > 0 ? existing.join(", ") : "(none)"}`
  );
  console.log();

  let created = 0;
  let skipped = 0;

  for (const eventName of KEY_EVENTS_TO_CREATE) {
    if (existing.includes(eventName)) {
      console.log(`  [SKIP] "${eventName}" is already a key event.`);
      skipped++;
    } else {
      console.log(`  [CREATE] Marking "${eventName}" as a key event...`);
      await createKeyEvent(propertyId, eventName, headers);
      created++;
    }
  }

  console.log();
  console.log("=== Summary ===");
  console.log(`  Created: ${created}`);
  console.log(`  Already existed (skipped): ${skipped}`);
  console.log();
  console.log("Done. Verify in GA4: Admin → Events → Key events tab.");
  console.log(
    "Note: It may take up to 24h for new key events to appear in conversion reports."
  );
}

main().catch((err) => {
  console.error("Error:", err.message ?? err);
  process.exit(1);
});
