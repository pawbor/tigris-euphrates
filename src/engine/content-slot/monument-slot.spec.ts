import { createAllMonuments } from 'engine/monument';

import { createMonumentSlot } from './monument-slot';

const monument = createAllMonuments()[0];

describe('\n\nWHEN I create new monument slot', () => {
  const slot = createMonumentSlot(monument);

  it('\nTHEN the slot has valid type', () => {
    expect(slot.slotType).toBe('MonumentSlot');
  });

  it('\nTHEN the slot contains the monument', () => {
    expect(slot.monument).toBe(monument);
    expect(slot.content[0]).toBe(monument);
  });
});

describe('\n\nGIVEN a monument slot', () => {
  const slot = createMonumentSlot(monument);

  describe('\nWHEN I check if it contains monument', () => {
    const truthy = slot.contains(monument.contentType);

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

  describe('\nWHEN I retrive monument by content type', () => {
    const retrived = slot.getContent(monument.contentType);

    it('\nTHEN I get the monument', () => {
      expect(retrived[0]).toBe(monument);
    });
  });

  describe('\nWHEN I retrive something else', () => {
    const retrived = slot.getContent(['OtherContent']);

    it('\nTHEN I get nothing', () => {
      expect(retrived).toEqual([]);
    });
  });
});
