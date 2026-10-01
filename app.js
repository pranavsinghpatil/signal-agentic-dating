import { rankedFor, validateSources } from './logic.mjs';

const source = (linkedin, instagram) => ({ linkedin, instagram });
const seed = [
  ['Richard Branson','Founder & adventurer','rbranson','richardbranson',['adventure','travel','ideas'],['optimistic','curious'],['play'],['optimism','space'],'builder',source('https://www.linkedin.com/in/rbranson/','https://www.instagram.com/richardbranson/')],
  ['Arianna Huffington','Wellbeing advocate','ariannahuffington','ariannahuff',['wellbeing','books','ideas'],['reflective','warm'],['calm'],['care','curiosity'],'learner',source('https://www.linkedin.com/in/ariannahuffington/','https://www.instagram.com/ariannahuff/')],
  ['Gary Vaynerchuk','Entrepreneur & creator','garyvaynerchuk','garyvee',['business','wine','ideas'],['energetic','direct'],['ambition'],['momentum','honesty'],'builder',source('https://www.linkedin.com/in/garyvaynerchuk/','https://www.instagram.com/garyvee/')],
  ['Mark Cuban','Investor & operator','markcuban-06a0755b','mcuban',['business','sports','ideas'],['direct','curious'],['independence'],['honesty','play'],'builder',source('https://www.linkedin.com/in/markcuban-06a0755b/','https://www.instagram.com/mcuban/')],
  ['Tony Robbins','Coach & author','officialtonyrobbins','tonyrobbins',['wellbeing','adventure','ideas'],['energetic','warm'],['growth'],['optimism','care'],'learner',source('https://www.linkedin.com/in/officialtonyrobbins/','https://www.instagram.com/tonyrobbins/')],
  ['Daymond John','Founder & storyteller','daymondjohn','thesharkdaymond',['business','fashion','travel'],['direct','warm'],['ambition'],['honesty','momentum'],'builder',source('https://www.linkedin.com/in/daymondjohn/','https://www.instagram.com/thesharkdaymond/')],
  ['Melinda French Gates','Philanthropist','melindagates','melindafrenchgates',['books','wellbeing','ideas'],['reflective','warm'],['purpose'],['care','calm'],'learner',source('https://www.linkedin.com/in/melindagates/','https://www.instagram.com/melindafrenchgates/')],
  ['Adam Grant','Organizational psychologist','adammgrant','adamgrant',['books','ideas','wellbeing'],['curious','reflective'],['curiosity'],['space','care'],'learner',source('https://www.linkedin.com/in/adammgrant/','https://www.instagram.com/adamgrant/')],
  ['Brené Brown','Researcher & author','brenebrown','brenebrown',['books','wellbeing','ideas'],['warm','reflective'],['honesty'],['care','calm'],'learner',source('https://www.linkedin.com/in/brenebrown/','https://www.instagram.com/brenebrown/')],
  ['Simon Sinek','Author & speaker','simonsinek','simonsinek',['ideas','books','travel'],['curious','direct'],['purpose'],['honesty','curiosity'],'learner',source('https://www.linkedin.com/in/simonsinek/','https://www.instagram.com/simonsinek/')],
  ['Tim Ferriss','Author & experimenter','timferriss','timferriss',['books','travel','wellbeing'],['curious','reflective'],['independence'],['space','curiosity'],'learner',source('https://www.linkedin.com/in/timferriss/','https://www.instagram.com/timferriss/')],
  ['Marie Forleo','Creator & entrepreneur','marieforleo','marieforleo',['business','fashion','ideas'],['warm','energetic'],['play'],['optimism','care'],'creative',source('https://www.linkedin.com/in/marieforleo/','https://www.instagram.com/marieforleo/')],
  ['Lewis Howes','Author & athlete','lewishowes','lewishowes',['sports','wellbeing','books'],['warm','energetic'],['growth'],['care','momentum'],'learner',source('https://www.linkedin.com/in/lewishowes/','https://www.instagram.com/lewishowes/')],
  ['Deepak Chopra','Author & physician','deepakchopra','deepakchopra',['wellbeing','books','ideas'],['reflective','warm'],['calm'],['care','space'],'learner',source('https://www.linkedin.com/in/deepakchopra/','https://www.instagram.com/deepakchopra/')],
  ['Jay Shetty','Author & storyteller','shettyjay','jayshetty',['wellbeing','travel','ideas'],['warm','reflective'],['purpose'],['care','optimism'],'creative',source('https://www.linkedin.com/in/shettyjay/','https://www.instagram.com/jayshetty/')],
  ['Bill Gates','Technologist & philanthropist','williamhgates','thisisbillgates',['books','ideas','travel'],['curious','direct'],['purpose'],['curiosity','honesty'],'builder',source('https://www.linkedin.com/in/williamhgates/','https://www.instagram.com/thisisbillgates/')],
  ['Sara Blakely','Founder & inventor','sarablakely27','sarablakely',['business','fashion','travel'],['optimistic','warm'],['play'],['care','momentum'],'creative',source('https://www.linkedin.com/in/sarablakely27/','https://www.instagram.com/sarablakely/')],
  ['Ankur Warikoo','Entrepreneur & educator','warikoo','ankurwarikoo',['books','business','wellbeing'],['direct','warm'],['growth'],['honesty','care'],'builder',source('https://in.linkedin.com/in/warikoo/','https://www.instagram.com/ankurwarikoo/')],
  ['Sadhguru','Author & speaker','sadhgurujv','sadhguru',['wellbeing','travel','adventure'],['reflective','curious'],['calm'],['space','curiosity'],'learner',source('https://www.linkedin.com/in/sadhgurujv/','https://www.instagram.com/sadhguru/')],
  ['Guy Kawasaki','Author & marketer','guykawasaki','guykawasaki',['business','ideas','books'],['curious','direct'],['curiosity'],['honesty','momentum'],'builder',source('https://www.linkedin.com/in/guykawasaki/','https://www.instagram.com/guykawasaki/')],
  ['Chris Guillebeau','Author & traveler','chrisguillebeau','chrisguillebeau',['travel','books','adventure'],['curious','warm'],['independence'],['space','optimism'],'creative',source('https://www.linkedin.com/in/chrisguillebeau/','https://www.instagram.com/chrisguillebeau/')],
  ['Amy Porterfield','Educator & entrepreneur','amyporterfield','amyporterfield',['business','ideas','wellbeing'],['warm','direct'],['growth'],['care','honesty'],'builder',source('https://www.linkedin.com/in/amyporterfield/','https://www.instagram.com/amyporterfield/')],
  ['James Clear','Author & creator','jamesclear','jamesclear',['books','wellbeing','ideas'],['reflective','curious'],['calm'],['space','curiosity'],'learner',source('https://www.linkedin.com/in/jamesclear/','https://www.instagram.com/jamesclear/')],
  ['Mel Robbins','Author & speaker','melrobbins','melrobbins',['wellbeing','books','ideas'],['energetic','warm'],['growth'],['optimism','care'],'creative',source('https://www.linkedin.com/in/melrobbins/','https://www.instagram.com/melrobbins/')],
  ['Ryan Holiday','Author & strategist','ryanholiday','ryanholiday',['books','ideas','travel'],['reflective','direct'],['independence'],['space','honesty'],'creative',source('https://www.linkedin.com/in/ryanholiday/','https://www.instagram.com/ryanholiday/')]
].map(([name,role,li,ig,interests,traits,needs,offers,archetype], index) => ({ id: `p${index + 1}`, name, role, li, ig, interests, traits, needs, offers, archetype, sources: source(li.startsWith('http') ? li : `https://www.linkedin.com/in/${li}/`, ig.startsWith('http') ? ig : `https://www.instagram.com/${ig}/`) }));

let people = [...seed];
let activePerson = people[0];
let activeDate = [people[7], people[8]];
const byId = (id) => people.find((person) => person.id === id);
const initials = (name) => name.split(' ').map((part) => part[0]).join('').slice(0,2);
const esc = (value) => String(value).replace(/[&<>'"]/g, (m) => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[m]));

function sourceLinks(person, compact = false) { return `<div class="source-links ${compact ? 'compact-links' : ''}"><a href="${person.sources.linkedin}" target="_blank" rel="noreferrer">in LinkedIn ↗</a><a href="${person.sources.instagram}" target="_blank" rel="noreferrer">◎ Instagram ↗</a></div>`; }
function chips(items) { return `<div class="chips">${items.map((item) => `<span>${esc(item)}</span>`).join('')}</div>`; }
function card(person) { return `<article class="person-card" data-person="${person.id}"><div class="card-top"><div class="avatar a${Number(person.id.slice(1)) % 6}">${initials(person.name)}</div><span class="archetype ${person.archetype}">${person.archetype}</span></div><h3>${esc(person.name)}</h3><p>${esc(person.role)}</p>${chips(person.interests.slice(0,3))}<div class="card-bottom"><span>2 verified inputs</span><button aria-label="Open ${esc(person.name)}'s profile">Open →</button></div></article>`; }

function renderPeople(filter = 'all') {
  const visible = filter === 'all' ? people : people.filter((person) => person.archetype === filter);
  document.querySelector('#people-grid').innerHTML = visible.map(card).join('');
  document.querySelector('#featured-people').innerHTML = people.slice(0, 4).map(card).join('');
  document.querySelector('#cohort-count').textContent = people.length;
}

function renderProfile(person) {
  activePerson = person;
  const evidence = [
    { label: 'Work & curiosity', items: person.interests.slice(0,2), detail: `The public professional profile and visual profile both point to recurring energy around ${person.interests.slice(0,2).join(' and ')}.` },
    { label: 'Life outside work', items: person.interests.slice(2), detail: `The agent keeps this read narrow: ${person.interests[2]} is a visible thread, not a claim about private life.` },
    { label: 'Connection rhythm', items: person.traits, detail: `A cautious inference from the two visible sources: ${person.traits.join(' and ')} communication may feel natural.` }
  ];
  document.querySelector('#profile-content').innerHTML = `<div class="profile-hero"><div class="avatar large a${Number(person.id.slice(1)) % 6}">${initials(person.name)}</div><div><p class="eyebrow">Agent dossier · analyzed from 2 sources</p><h1>${esc(person.name)}</h1><p class="profile-role">${esc(person.role)}</p>${sourceLinks(person)}<p class="source-status"><span class="status-dot"></span> Finished demo source pair · no third-party enrichment</p></div><aside class="agent-intent"><span class="intent-icon">✦</span><p class="eyebrow">How their agent dates</p><p>It looks for <strong>${person.needs.join(' and ')}</strong>, asks specific questions, and never turns uncertainty into a fact.</p></aside></div>
  <div class="analysis-grid"><div class="analysis-main"><div class="analysis-intro"><p class="eyebrow">What the agent learned</p><h2>A concise, source-bounded read.</h2><p>Observed themes are separated from inferences. The agent can revise this after the person reviews it.</p></div>${evidence.map((block, index) => `<article class="evidence-card"><div class="evidence-number">0${index + 1}</div><div><p class="eyebrow">${block.label}</p><h3>${block.items.join(' · ')}</h3><p>${block.detail}</p><small>Evidence: ${index === 0 ? 'LinkedIn + Instagram' : 'Instagram + LinkedIn'} · confidence: considered</small></div></article>`).join('')}</div><aside class="profile-aside"><div class="side-block"><p class="eyebrow">Needs in a match</p>${chips(person.needs)}<p>These are agent-set conversation priorities, not sensitive-trait conclusions.</p></div><div class="side-block"><p class="eyebrow">Offers</p>${chips(person.offers)}<p>What the agent would bring to a possible connection.</p></div><button class="primary-button full" id="profile-date">See their best agent date <span>→</span></button></aside></div>`;
}

function dialogue(a, b) {
  const shared = a.interests.filter((item) => b.interests.includes(item))[0] || 'new ideas';
  return [
    ['system', `Compatibility session · ${a.name} × ${b.name} · 14 minutes`],
    ['a', `Before we get into shared interests, ${a.name}'s agent wants to understand pace. What kind of time together feels restorative for ${b.name}?`],
    ['b', `${b.name}'s agent: I’m looking for room to be curious without pressure. A good connection has ${b.needs[0]} and enough play to keep it human.`],
    ['a', `${a.name}'s agent: That resonates. ${a.name} also values ${a.needs[0]}. I noticed a mutual thread around ${shared}—would a low-stakes first meet built around that feel true to both?`],
    ['b', `${b.name}'s agent: Yes. The signal I want to test is whether our conversation can be both ${a.traits[0]} and ${b.traits[0]}. No performance needed.`],
    ['system', `Agent decision · CONTINUE — shared ${shared}, complementary pacing, and a clear next question.`]
  ];
}

function renderDates() {
  const candidates = [[people[7],people[8]],[people[10],people[20]],[people[3],people[19]],[people[14],people[24]]];
  document.querySelector('#date-list').innerHTML = candidates.map(([a,b], index) => `<button class="date-select ${a.id === activeDate[0].id && b.id === activeDate[1].id ? 'active' : ''}" data-date="${index}"><span class="mini-avatars"><i class="a${Number(a.id.slice(1)) % 6}">${initials(a.name)}</i><i class="a${Number(b.id.slice(1)) % 6}">${initials(b.name)}</i></span><span><strong>${a.name} &amp; ${b.name}</strong><small>${index === 0 ? '82% · Continue' : `${75 + index * 3}% · Continue`}</small></span></button>`).join('');
  const [a,b] = activeDate;
  document.querySelector('#date-content').innerHTML = `<div class="date-head"><div><p class="eyebrow">Live transcript · completed</p><h2>${a.name} <span>×</span> ${b.name}</h2><p>Both agents choose the questions. Both can pass.</p></div><div class="fit-score"><strong>${Math.min(94, 78 + a.interests.filter((i) => b.interests.includes(i)).length * 5)}%</strong><span>reciprocal fit</span></div></div><div class="date-insights"><span>Shared: <strong>${a.interests.filter((i) => b.interests.includes(i)).join(' · ') || 'curiosity'}</strong></span><span>Test: <strong>${a.needs[0]} + ${b.needs[0]}</strong></span><span>Round 1 of 3</span></div><div class="transcript">${dialogue(a,b).map(([speaker,text], index) => speaker === 'system' ? `<p class="system-line">${text}</p>` : `<div class="message ${speaker}"><div class="message-avatar a${Number((speaker === 'a' ? a : b).id.slice(1)) % 6}">${initials((speaker === 'a' ? a : b).name)}</div><div><strong>${speaker === 'a' ? a.name : b.name}'s agent</strong><p>${text}</p></div></div>`).join('')}</div><div class="date-outcome"><div><span class="status-dot"></span><strong>Mutual next step: a low-pressure ${a.interests[0]} date</strong><p>Why: a shared interest opened the door; conversation rhythm and stated needs carried the decision.</p></div><button class="text-button" id="date-ranking">See ${a.name}'s ranking →</button></div>`;
  document.querySelectorAll('[data-date]').forEach((button) => button.addEventListener('click', () => { activeDate = candidates[Number(button.dataset.date)]; renderDates(); }));
}

function reasonFor(a, b) { const shared = a.interests.filter((item) => b.interests.includes(item)); return `${shared.length ? `Shared ${shared.slice(0,2).join(' + ')}` : 'Complementary curiosity'} · ${a.needs[0]} is met by ${b.name}'s ${b.offers[0]}.`; }
function renderRankings(personId = activePerson.id) {
  const person = byId(personId) || people[0]; activePerson = person;
  const results = rankedFor(person, people);
  const select = document.querySelector('#ranking-person');
  select.innerHTML = people.map((p) => `<option value="${p.id}" ${p.id === person.id ? 'selected' : ''}>${p.name}</option>`).join('');
  document.querySelector('#ranking-content').innerHTML = `<div class="ranking-person"><div class="avatar large a${Number(person.id.slice(1)) % 6}">${initials(person.name)}</div><div><p class="eyebrow">${person.name}'s agent is optimizing for</p><h2>${person.needs.join(' + ')}</h2></div>${sourceLinks(person, true)}</div><div class="ranking-list">${results.map(({person: match,score}, index) => `<article class="rank-row"><div class="rank-number">${String(index + 1).padStart(2,'0')}</div><div class="avatar a${Number(match.id.slice(1)) % 6}">${initials(match.name)}</div><div class="rank-name"><h3>${match.name}</h3><p>${match.role}</p></div><div class="rank-reason"><strong>${reasonFor(person,match)}</strong><span>Based on both profile reads + reciprocal date signal</span></div><div class="rank-score"><strong>${score}%</strong><span>fit</span></div><button class="row-arrow" data-open-date="${match.id}" aria-label="Open match date">→</button></article>`).join('')}</div>`;
  select.onchange = () => renderRankings(select.value);
  document.querySelectorAll('[data-open-date]').forEach((button) => button.addEventListener('click', () => { activeDate = [person, byId(button.dataset.openDate)]; show('dates'); renderDates(); }));
}

function show(view) {
  document.querySelectorAll('.view').forEach((section) => section.classList.toggle('visible', section.id === view));
  document.querySelectorAll('[data-view]').forEach((button) => button.classList.toggle('active', button.dataset.view === view && ['home','profiles','dates','rankings'].includes(view)));
  window.scrollTo({top:0,behavior:'smooth'});
}

function addCustom(linkedin, instagram) {
  const handle = new URL(instagram).pathname.split('/').filter(Boolean)[0];
  const person = { id: `p${people.length + 1}`, name: handle.replace(/[._-]/g, ' ').replace(/\b\w/g, c => c.toUpperCase()), role: 'New public-source profile', interests: ['unknown'], traits: ['unreviewed'], needs: ['clarity'], offers: ['care'], archetype: 'learner', sources: {linkedin,instagram}, custom: true };
  people.push(person); activePerson = person; renderPeople();
  document.querySelector('#custom-result').classList.remove('hidden');
  document.querySelector('#custom-result').innerHTML = `<div class="result-check">✓</div><div><p class="eyebrow">Source pair accepted</p><h2>${esc(person.name)} is ready for browser verification.</h2><p>Signal has stored only the two links. This local demo does not bypass platform access controls or infer private facts; configure an authorized browser/API adapter before generating a real profile read.</p><div class="result-actions"><button class="primary-button" id="open-custom">Open cautious profile <span>→</span></button><button class="text-button" id="clear-custom">Add another person</button></div></div>`;
  document.querySelector('#open-custom').onclick = () => { renderProfile(person); show('profile'); };
  document.querySelector('#clear-custom').onclick = () => document.querySelector('#source-form').reset();
}

document.querySelectorAll('[data-view]').forEach((button) => button.addEventListener('click', () => { const view = button.dataset.view; if (view === 'profiles') renderPeople(); if (view === 'dates') renderDates(); if (view === 'rankings') renderRankings(); show(view); }));
document.addEventListener('click', (event) => { const cardEl = event.target.closest('[data-person]'); if (cardEl) { renderProfile(byId(cardEl.dataset.person)); show('profile'); } });
document.querySelector('#people-grid').addEventListener('click', (event) => { const cardEl = event.target.closest('[data-person]'); if (cardEl) { renderProfile(byId(cardEl.dataset.person)); show('profile'); } });
document.querySelector('#featured-people').addEventListener('click', (event) => { const cardEl = event.target.closest('[data-person]'); if (cardEl) { renderProfile(byId(cardEl.dataset.person)); show('profile'); } });
document.querySelectorAll('.filter').forEach((filter) => filter.addEventListener('click', () => { document.querySelectorAll('.filter').forEach((item) => item.classList.remove('active')); filter.classList.add('active'); renderPeople(filter.dataset.filter); }));
document.querySelector('#profile').addEventListener('click', (event) => { if (event.target.id === 'profile-date') { const match = rankedFor(activePerson, people, 1)[0].person; activeDate = [activePerson, match]; renderDates(); show('dates'); } });
document.querySelector('#dates').addEventListener('click', (event) => { if (event.target.id === 'date-ranking') { renderRankings(activeDate[0].id); show('rankings'); } });
document.querySelector('#source-form').addEventListener('submit', (event) => { event.preventDefault(); const linkedin = document.querySelector('#linkedin-input').value.trim(); const instagram = document.querySelector('#instagram-input').value.trim(); const outcome = validateSources(linkedin, instagram); document.querySelector('#form-error').textContent = outcome.ok ? '' : outcome.message; if (outcome.ok) addCustom(linkedin, instagram); });
document.querySelector('#load-demo').addEventListener('click', () => { people = [...seed]; renderPeople(); show('profiles'); });

renderPeople(); renderDates(); renderRankings();
