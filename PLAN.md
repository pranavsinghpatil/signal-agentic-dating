# Agentic Dating Site — Implementation Plan

## Workspace facts

- `D:\agt` contains no project files and is not currently a Git repository.
- There is no existing framework, test runner, or repository-specific `AGENTS.md` to follow. Confirm the available runtime and scaffold before implementation.

## Product outcome

Deliver a working website that opens on a completed 25-person demo, shows source-linked profiles and analysis first, then explains agent-to-agent dates and per-person compatibility rankings. Visitors can also enter LinkedIn and public Instagram profile URLs to run the same flow for their own cohort.

## Build sequence

1. **Scaffold and contract:** Choose a small full-stack web stack after checking installed runtimes. Define typed person, source, profile-analysis, date, and ranking records; keep all demo data in a replaceable fixture/store.
2. **Seeded cohort:** Assemble at least 25 real people with exactly one LinkedIn profile URL and one verified public Instagram profile URL each. Verify the links resolve to the same person; record verification status and source excerpts/fields. Use only those two URLs as analysis inputs. Do not invent source facts; mark unavailable details as unknown. Keep this finished cohort as the default demo dataset.
3. **Link ingestion:** Build a form for LinkedIn + Instagram URLs per person, validation for URL shape and public Instagram visibility, add/remove person controls, progress/errors, and a way to load the seeded example. Require at least two compatible people for a run; clearly report inaccessible or private sources instead of silently substituting information.
4. **Source-limited analysis:** Fetch/parse only the supplied public LinkedIn and Instagram pages through an allowed, maintainable method; retain provenance per extracted fact. Generate a profile with interests, hobbies, relationship needs/preferences when explicitly supported, communication/lifestyle clues, uncertainty, and source citations. Separate observed facts from cautious inferences and avoid sensitive-trait inference. If a page cannot be accessed, request pasted public-profile text or report the limitation; do not use search results or third-party profiles as hidden sources.
5. **Profile pages:** Show each analyzed person before any rankings: identity, both official source links, evidence-backed interests/needs, confidence or unknowns, and a concise explanation of the agent's dating approach. Include loading, failure, and empty states.
6. **Agent dates:** Run every agent through structured reciprocal date rounds with distinct goals grounded only in its person’s profile. Show the actual conversation/decisions, questions, compatibility evidence, and respectful pass/continue outcome. Persist date transcripts and derive scores from explicit criteria (values/needs alignment, shared interests, communication, and stated deal-breakers); expose the rationale rather than presenting a bare score.
7. **Rankings and navigation:** After profiles and dates, show a ranked list for every person, with reciprocal fit, evidence-backed reasons, uncertainty, and links back to the date. Support sorting, filtering, and rerunning. Keep ordering stable for the same inputs and model/configuration.
8. **Demo and handoff:** Make the seeded run one-click and preloaded. Add a concise walkthrough/recording script that shows ingestion, one source analysis and profile, live date exchange, then rankings, within three minutes. Document run/deploy steps, the actual data-access stack, and limitations accurately.

## Deterministic validation

- Unit tests: URL validation, public/private and inaccessible-source handling, source provenance, no cross-source contamination, ranking calculation/tie-breaking, and seeded cohort count (>=25; exactly two official URLs per person).
- Integration tests: seeded run progresses ingestion → all profiles → date records → rankings; custom-link run exercises success, partial failure, and retry states.
- UI/e2e checks: default demo opens populated; profile analysis appears before rankings; a date transcript is visible; each person can see their ranking; entering links, validation errors, and rerunning work.
- Build/type/lint checks: run the chosen framework’s production build, type checker, and linter. Inspect the final diff and verify all demo links and provenance records before recording.

## Acceptance gates

- The default finished example contains at least 25 real, link-verified people and can be opened without typing.
- Every analyzed claim is traceable to that person’s LinkedIn or public Instagram input; missing evidence stays unknown.
- Agents visibly date on each person’s behalf, and all people receive explainable rankings.
- Live link entry works end to end, including honest source-access failures.
- The three-minute walkthrough demonstrates the complete path in the required order; repository, live/demo links, and technical description match what is actually shipped.
