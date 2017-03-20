import { createFarm, createUnificationTile } from 'engine/tile';

import { createUnificationTileSlot } from './unification-tile-slot';

const civilizationTile = createFarm();
const unificationTile = createUnificationTile();

describe('\n\nWHEN I create new unification tile slot', () => {
  const slot = createUnificationTileSlot(civilizationTile, unificationTile);

  it('\nTHEN the slot has valid type', () => {
    expect(slot.slotType).toBe('UnificationTileSlot');
  });

  it('\nTHEN the slot contains the unification tile', () => {
    expect(slot.unificationTile).toBe(unificationTile);
    expect(slot.content).toContain(unificationTile);
  });

  it('\nTHEN the slot contains the civilization tile', () => {
    expect(slot.civilizationTile).toBe(civilizationTile);
    expect(slot.content).toContain(civilizationTile);
  });
});

describe('\n\nGIVEN a unification tile slot', () => {
  const slot = createUnificationTileSlot(civilizationTile, unificationTile);

  describe('\nWHEN I check if it contains unification tile', () => {
    const truthy = slot.contains(unificationTile.contentType);

    it('\nTHEN I get true', () => {
      expect(truthy).toBeTruthy();
    });
  });

  describe('\nWHEN I check if it contains civilization tile', () => {
    const truthy = slot.contains(civilizationTile.contentType);

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

  describe('\nWHEN I retrive unification tile by content type', () => {
    const retrived = slot.getContent(unificationTile.contentType);

    it('\nTHEN I get the tile', () => {
      expect(retrived[0]).toBe(unificationTile);
    });
  });

  describe('\nWHEN I retrive civilization tile by content type', () => {
    const retrived = slot.getContent(civilizationTile.contentType);

    it('\nTHEN I get the tile', () => {
      expect(retrived[0]).toBe(civilizationTile);
    });
  });

  describe('\nWHEN I retrive something else', () => {
    const retrived = slot.getContent(['OtherContent']);

    it('\nTHEN I get nothing', () => {
      expect(retrived).toEqual([]);
    });
  });
});
