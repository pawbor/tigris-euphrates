import { createAllMonuments } from 'engine/monument';
import { createFarm, createTemple } from 'engine/tile';
import { createTreasureToken } from 'engine/token';

import { createTreasureTempleSlot } from './treasure-temple-slot';

const farm = createFarm();
const temple = createTemple();
const treasure = createTreasureToken();
const monument = createAllMonuments()[0];

describe('\n\nWHEN I create new treasure temple slot', () => {
  const slot = createTreasureTempleSlot(temple, treasure);

  it('\nTHEN the slot has valid type', () => {
    expect(slot.slotType).toBe('TreasureTempleSlot');
  });

  it('\nTHEN the slot contains the temple tile', () => {
    expect(slot.temple).toBe(temple);
    expect(slot.content).toContain(temple);
  });

  it('\nTHEN the slot contains the treasure token', () => {
    expect(slot.treasure).toBe(treasure);
    expect(slot.content).toContain(treasure);
  });
});

describe('\n\nWHEN I create new treasure temple slot with invalid tile', () => {
  const fn = () => createTreasureTempleSlot(farm, treasure);

  it('\nTHEN error is thrown', () => {
    expect(fn).toThrowError('treasure-temple-slot.invalid-civilization-tile');
  });
});

describe('\n\nGIVEN a treasure temple slot', () => {
  const slot = createTreasureTempleSlot(temple, treasure);

  describe('\nWHEN I check if it contains temple tile', () => {
    const truthy = slot.contains(temple.contentType);

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
      const falsy = slot.contains('OtherContent');

      it('\nTHEN I get false', () => {
        expect(falsy).toBeFalsy();
      });
    }
  );

  describe('\nWHEN I retrive temple tile by content type', () => {
    const retrived = slot.getContent(temple.contentType);

    it('\nTHEN I get the tile', () => {
      expect(retrived[0]).toBe(temple);
    });
  });

  describe('\nWHEN I retrive treasure token by content type', () => {
    const retrived = slot.getContent(treasure.contentType);

    it('\nTHEN I get the treasure', () => {
      expect(retrived[0]).toBe(treasure);
    });
  });

  describe('\nWHEN I retrive something else', () => {
    const retrived = slot.getContent('OtherContent');

    it('\nTHEN I get nothing', () => {
      expect(retrived).toEqual([]);
    });
  });

  describe('\nWHEN I place a momument in that slot', () => {
    const newSlot = slot.placeMonument(monument);

    it('\nTHEN new slot should have valid type', () => {
      expect(newSlot.slotType).toBe('TreasureMonumentSlot');
    });

    it('\nTHEN new slot should contain monument', () => {
      expect(newSlot.monument).toBe(monument);
    });
  });
});
