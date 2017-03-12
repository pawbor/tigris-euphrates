import { createLeaders } from 'engine/leader';

import { createLeaderSlot } from './leader-slot';

const leader = createLeaders('Bull')[0];

describe('\n\nWHEN I create new leader slot', () => {
  const slot = createLeaderSlot(leader);

  it('\nTHEN the slot should have valid type', () => {
    expect(slot.slotType).toEqual('LeaderSlot');
  });

  it('\nTHEN the slot should contain the tile', () => {
    expect(slot.leader).toEqual(leader);
  });
});

describe('\n\nGIVEN a catastrophe tile slot', () => {
  const slot = createLeaderSlot(leader);

  describe('\nWHEN I check if it contains catastrophe tile', () => {
    const contains = slot.contains('Leader');

    it('\nTHEN I should get true', () => {
      expect(contains).toBeTruthy();
    });
  });
});
