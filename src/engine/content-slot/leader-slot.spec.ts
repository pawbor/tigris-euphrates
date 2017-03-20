import { createLeaders } from 'engine/leader';

import { createLeaderSlot } from './leader-slot';

const leader = createLeaders('Bull')[0];

describe('\n\nWHEN I create new leader slot', () => {
  const slot = createLeaderSlot(leader);

  it('\nTHEN the slot has valid type', () => {
    expect(slot.slotType).toBe('LeaderSlot');
  });

  it('\nTHEN the slot contains the tile', () => {
    expect(slot.leader).toBe(leader);
    expect(slot.content[0]).toBe(leader);
  });
});

describe('\n\nGIVEN a leader slot', () => {
  const slot = createLeaderSlot(leader);

  describe('\nWHEN I check if it contains leader', () => {
    const truthy = slot.contains(leader.contentType);

    it('\nTHEN I get true', () => {
      expect(truthy).toBeTruthy();
    });
  });

  describe('\nWHEN I check if it contains something else', () => {
    const falsy = slot.contains(['OtherContent']);

    it('\nTHEN I get false', () => {
      expect(falsy).toBeFalsy();
    });
  });

  describe('\nWHEN I retrive leader by content type', () => {
    const retrived = slot.getContent(leader.contentType);

    it('\nTHEN I get the leader', () => {
      expect(retrived[0]).toBe(leader);
    });
  });

  describe('\nWHEN I retrive something else', () => {
    const retrived = slot.getContent(['OtherContent']);

    it('\nTHEN I get nothing', () => {
      expect(retrived).toEqual([]);
    });
  });
});
