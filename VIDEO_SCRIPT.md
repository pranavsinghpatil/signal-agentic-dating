# Signal demo — tutorial/demo, ~2:45

## Hook options (pick one)

1. **Verdict first:** “This is Signal: 25 dating agents have already gone on 300 reciprocal dates, and every recommendation has a visible reason. In the next 2 minutes and 45 seconds, I’ll show the profile read, an actual agent date, and the final ranking.”
2. **Mechanism:** “Dating apps make you decide from a card. Signal lets an agent ask better questions first—using exactly two public sources per person. Here is the completed 25-person run.”
3. **Proof:** “There are 50 source links behind this screen: one LinkedIn and one public Instagram for each of 25 people. Signal turns that bounded input into profiles, dates, and explainable matches.”

## Script

【0:00】 [SCREEN: Signal home page]

“This is Signal, an agentic dating prototype. Each person is represented by an agent. The agent gets exactly two public inputs: LinkedIn and Instagram. In this finished cohort, 25 agents have completed 300 reciprocal dates. The important part is that you can inspect the reasoning instead of trusting a black-box score.”

【0:20】 [CLICK: Explore the finished cohort. Scroll across people cards.]

“We start with people, not rankings. Every card represents one source-bounded agent. I’ll open Richard Branson’s profile first.”

【0:30】 [CLICK: Richard Branson card. Pause on LinkedIn and Instagram chips.]

“At the top are the only two linked sources. Under them, the agent separates visible themes from cautious inferences. It has a work-and-curiosity read, a life-outside-work thread, and a connection rhythm. It also states what it is optimizing for in a match. Unknowns stay unknown; there is no third-party enrichment.”

【0:55】 [SCROLL: Needs in a match and Offers.]

“This is the profile-first rule: before a recommendation, you can see what the agent believes and why. Now I’ll open the best date for this person.”

【1:05】 [CLICK: See their best agent date.]

“Here are two actual agents having a structured first conversation. They are not impersonating their people. They ask about pace, curiosity, and what a good connection looks like. The shared theme opens the conversation, but the decision comes from explicit needs and communication rhythm.”

【1:28】 [SCROLL through transcript, pause on ‘Agent decision · CONTINUE’.]

“This date ends in a transparent Continue decision: a low-pressure next step, plus the reasons it earned that next step. No score appears without the conversation behind it.”

【1:42】 [CLICK: See Richard Branson’s ranking.]

“Now the ranking. Richard gets five reciprocal fits. Each row gives a score, the matching person, and a readable reason. The model weights stated needs, shared interests, communication rhythm, and date chemistry. I can switch this picker to any person in the cohort, and the recommendations re-rank deterministically.”

【2:05】 [CHANGE: picker to another person. Then CLICK: Add sources.]

“Finally, this is the live intake flow. A visitor pastes one public LinkedIn member profile and one public Instagram profile. Signal validates the pair and stores only those two links.”

【2:20】 [PASTE: sample URLs. CLICK: Validate both sources.]

“For a real deployment, browser analysis must use an authorized API or user-provided, licensed data export. This demo deliberately does not bypass LinkedIn or Instagram controls. If the source cannot be accessed legitimately, the interface says so instead of inventing a profile.”

【2:38】 [SCREEN: accepted source-pair message, then home page.]

“That is Signal: source-limited profiles first, agents that actually date, and rankings that can be read, questioned, and revised. The next production step is connecting authorized source access without breaking the two-source boundary.”

## Retention map

- **0:00:** Finished-run count establishes the concrete demo promise.
- **0:20:** Profile-first rule delays rankings until the profile evidence is visible.
- **1:05:** Date transcript is the main proof beat; the Continue decision resolves it.
- **1:42:** Rankings answer the ‘what did the date change?’ question.
- **2:05:** Live intake shows the system can accept a new pair and explains the authorized-access constraint.
