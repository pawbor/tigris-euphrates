import { createLeaders } from './leader';

describe('\n\nWHEN I create all dynasty leaders', () => {
  const dynasty = 'Archer';
  const leaders = createLeaders(dynasty);

  it('\nTHEN 4 leader are created', () => {
    expect(leaders.length).toEqual(4);
  });

  it('\nTHEN each leader has valid content type ', () => {
    leaders.forEach((leader) => {
      expect(leader.contentType).toContain('Leader');
      expect(leader.contentType).toContain(dynasty);
      expect(leader.contentType).toContain(leader.role);
    });
  });

  it('\nTHEN Farmer leader is created', () => {
    const expected = jasmine.objectContaining({ role: 'Farmer', dynasty });
    expect(leaders).toContain(expected);
  });

  it('\nTHEN King leader is created', () => {
    const expected = jasmine.objectContaining({ role: 'King', dynasty });
    expect(leaders).toContain(expected);
  });

  it('\nTHEN Priest leader is created', () => {
    const expected = jasmine.objectContaining({ role: 'Priest', dynasty });
    expect(leaders).toContain(expected);
  });

  it('\nTHEN Trader leader is created', () => {
    const expected = jasmine.objectContaining({ role: 'Trader', dynasty });
    expect(leaders).toContain(expected);
  });
});
