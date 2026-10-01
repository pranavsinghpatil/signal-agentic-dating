# Signal — source-limited dating agents

Signal is a runnable agentic-dating demo: each person has one agent, exactly two public source links (LinkedIn + Instagram), an inspectable profile read, a visible agent-to-agent date, and an explainable personal ranking.

## Run locally

This project intentionally has no runtime dependencies.

```powershell
node server.mjs
```

Open `http://localhost:4173`.

To run deterministic checks without the locally broken npm shim:

```powershell
node --test tests/*.test.mjs
node --check app.js
node --check server.mjs
```

## Deploy to Vercel

This is a static app. Import the GitHub repository into Vercel and use the default static deployment; no build command, database, secret, or server configuration is required. Vercel serves `index.html` and the browser-side modules directly. `server.mjs` is only a local-development convenience.

The completed sample run works on Vercel. A production version that reads visitor-supplied social profiles needs a separate authorized API / user-consented export service; it must not bypass LinkedIn or Instagram access controls.

## What is in the demo

- A completed cohort of 25 public-figure reference accounts, each modelled with precisely two link-outs.
- Profile-first navigation: open a person before any ranking is shown.
- Source labels on all generated profile themes, with an explicit distinction between a visible theme and a cautious inference.
- Date Room transcripts with reciprocal questions, an explainable decision, and a next step.
- Deterministic top-five rankings for every person. The scoring model is 35% stated needs alignment, 30% shared interests, 20% communication rhythm, and 15% date chemistry.
- A two-field source intake. It checks public-shaped profile URLs and creates an explicitly unverified source record—never a fabricated profile.

## Data boundary and platform safety

The finished cohort is a product fixture, not a claim that Signal has crawled, copied, or archived anybody's social profile. The UI links directly to the supplied public profiles. The local source-intake flow retains only those links and deliberately does **not** evade login, privacy, robots, rate limits, or platform controls.

LinkedIn prohibits automated scraping/copying of profile information, and Instagram access must be implemented with an authorized API or user-provided, licensed profile export. A production connector should use an account-authorized integration / official API, store the smallest necessary set of visible fields with per-field provenance, and report an inaccessible source rather than fill a gap with search results. See LinkedIn's [prohibited software guidance](https://www.linkedin.com/help/linkedin/answer/a1341387/prohibited-software-and-extensions) and [User Agreement](https://www.linkedin.com/legal/user-agreement).

## Technical stack

- **Frontend:** semantic HTML, responsive CSS, modern browser JavaScript.
- **Server:** Node.js `http` static server—no tracker, database, or third-party enrichment path.
- **Validation and matching:** pure ES modules with Node's built-in test runner.
- **Production source connector (not bundled):** official / authorized LinkedIn and Instagram APIs or user-authorized exports; a browser-verification adapter must respect each platform's terms and access controls. The sample app does not scrape either platform.

## Three-minute walkthrough

1. **0:00–0:20 — overview:** Open Signal's completed run. Point out the 25 agents and the two-source rule.
2. **0:20–1:00 — profile first:** Open any person from *People*. Show the LinkedIn + Instagram link chips, source-bounded themes, needs, and agent intent.
3. **1:00–1:40 — date:** Choose *Date room*. Read the four exchanged agent messages and the explicit `CONTINUE` decision.
4. **1:40–2:10 — rankings:** Use the ranking picker; open a ranked match and show the score, reason, and date link.
5. **2:10–2:45 — live intake:** Click *Add sources*, paste a LinkedIn `/in/` URL and an Instagram handle URL, and show the format check plus the authorized-access safeguard.
6. **2:45–3:00 — close:** Reiterate that the production connector only runs with authorized access and never silently substitutes third-party data.

## Submission copy

**Overall explanation (184 characters):**

> Signal gives every person a source-limited dating agent: two public links become a transparent profile, a real agent conversation, and explainable reciprocal matches.

**Technical section (365 characters):**

> The demo uses a Node.js static server and browser-side ES modules. It does not scrape LinkedIn or Instagram. Production ingestion is designed for authorized official APIs or user-provided licensed exports, with per-field provenance and access-control failures surfaced to the user. The local form checks only public profile URL shape and stores exactly two links.
