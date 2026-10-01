import test from 'node:test';
import assert from 'node:assert/strict';
import { rankedFor, scorePair, validateSources } from '../logic.mjs';

test('accepts exactly public-shaped LinkedIn and Instagram profile paths', () => {
  assert.equal(validateSources('https://www.linkedin.com/in/alexisohanian/', 'https://www.instagram.com/alexisohanian/').ok, true);
  assert.equal(validateSources('https://linkedin.com/company/example', 'https://www.instagram.com/example/').ok, false);
  assert.equal(validateSources('https://www.linkedin.com/in/example/', 'https://www.instagram.com/p/post/').ok, false);
});

test('ranks deterministically and excludes the person themself', () => {
  const a = { id: 'a', name: 'A', interests: ['books'], traits: ['warm'], needs: ['space'], offers: ['care'] };
  const b = { id: 'b', name: 'B', interests: ['books'], traits: ['warm'], needs: ['care'], offers: ['space'] };
  const c = { id: 'c', name: 'C', interests: [], traits: [], needs: [], offers: [] };
  assert.equal(scorePair(a, b), scorePair(b, a));
  assert.deepEqual(rankedFor(a, [a, b, c], 2).map(({ person }) => person.id), ['b', 'c']);
});
