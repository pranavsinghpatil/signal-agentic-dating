export function validateSources(linkedin, instagram) {
  let li; let ig;
  try { li = new URL(linkedin); ig = new URL(instagram); } catch { return { ok: false, message: 'Please enter complete https:// profile URLs.' }; }
  if (!/^https?:$/.test(li.protocol) || !/(^|\.)linkedin\.com$/i.test(li.hostname) || !/^\/in\/[\w-]+\/?$/i.test(li.pathname)) return { ok: false, message: 'Use a public LinkedIn member profile, such as linkedin.com/in/name.' };
  if (!/^https?:$/.test(ig.protocol) || !/(^|\.)instagram\.com$/i.test(ig.hostname) || !/^\/[A-Za-z0-9._]+\/?$/i.test(ig.pathname)) return { ok: false, message: 'Use a public Instagram profile URL, such as instagram.com/name.' };
  return { ok: true };
}

export function scorePair(a, b) {
  const shared = a.interests.filter((item) => b.interests.includes(item)).length;
  const complementary = a.traits.filter((item) => b.traits.includes(item)).length;
  const needFit = a.needs.filter((item) => b.offers.includes(item)).length + b.needs.filter((item) => a.offers.includes(item)).length;
  return Math.min(98, 52 + shared * 8 + complementary * 4 + needFit * 6 + ((a.id.charCodeAt(0) + b.id.charCodeAt(0)) % 6));
}

export function rankedFor(person, people, count = 5) {
  return people.filter((other) => other.id !== person.id).map((other) => ({ person: other, score: scorePair(person, other) })).sort((a, b) => b.score - a.score || a.person.name.localeCompare(b.person.name)).slice(0, count);
}
