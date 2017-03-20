import { createAllMonuments } from 'engine/monument';
import { createTreasureToken } from 'engine/token';

import { createTreasureMonumentSlot } from './treasure-monument-slot';

const monument = createAllMonuments()[0];
const treasure = createTreasureToken();


describe('\n\nWHEN I create new treasure monument slot', () => {
  const slot = createTreasureMonumentSlot(monument, treasure);

  it('\nTHEN the slot has valid type', () => {
    expect(slot.slotType).toBe('TreasureMonumentSlot');
  });

  it('\nTHEN the slot contains the monument', () => {
    expect(slot.monument).toBe(monument);
    expect(slot.content).toContain(monument);
  });

  it('\nTHEN the slot contains the treasure token', () => {
    expect(slot.treasure).toBe(treasure);
    expect(slot.content).toContain(treasure);
  });
});

describe('\n\nGIVEN a treasure monument slot', () => {
  const slot = createTreasureMonumentSlot(monument, treasure);

  describe('\nWHEN I check if it contains monument', () => {
    const truthy = slot.contains(monument.contentType);

    it('\nTHEN I get true', () => {
      expect(truthy).toBeTruthy();
    });
  });

  describe('\nWHEN I check if it contains treasure token', () => {
    const truthy = slot.contains(treasure.contentType);

    it('\nTHEN I get true', () => {
      expect(truthy).toBeTruthy();
    });
  });

  describe('\nWHEN I check if it contains something else',
    () => {
      const falsy = slot.contains(['OtherContent']);

      it('\nTHEN I get false', () => {
        expect(falsy).toBeFalsy();
      });
    }
  );

  describe('\nWHEN I retrive monument by content type', () => {
    const retrived = slot.getContent(monument.contentType);

    it('\nTHEN I get the tile', () => {
      expect(retrived[0]).toBe(monument);
    });
  });

  describe('\nWHEN I retrive treasure token by content type', () => {
    const retrived = slot.getContent(treasure.contentType);

    it('\nTHEN I get the treasure', () => {
      expect(retrived[0]).toBe(treasure);
    });
  });

  describe('\nWHEN I retrive something else', () => {
    const retrived = slot.getContent(['OtherContent']);

    it('\nTHEN I get nothing', () => {
      expect(retrived).toEqual([]);
    });
  });
});
