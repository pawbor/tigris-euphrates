import { createLeaders } from 'engine/leader';

import { createLeaderSlot } from './leader-slot';

describe('createLeaderSlot', () => {
  it('should create LeaderSlot', () => {
    const leader = createLeaders('Bull')[0];
    const slot = createLeaderSlot(leader);
    const expected = jasmine.objectContaining({
      type: 'Leader', leader
    });
    expect(slot).toEqual(expected);
  });
});
