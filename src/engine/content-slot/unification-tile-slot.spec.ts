import { createUnificationTile, createFarm } from 'engine/tile';

import { createUnificationTileSlot } from './unification-tile-slot';

describe('\n\nWHEN I create new unification tile slot', () => {
  const civilizationTile = createFarm();
  const unificationTile = createUnificationTile();
  const slot = createUnificationTileSlot(civilizationTile, unificationTile);

  it('\nTHEN the slot should have valid type', () => {
    expect(slot.slotType).toEqual('UnificationTileSlot');
  });

  it('\nTHEN the slot should contain the unification tile', () => {
    expect(slot.unificationTile).toEqual(unificationTile);
  });

  it('\nTHEN the slot should contain the civilization tile', () => {
    expect(slot.civilizationTile).toEqual(civilizationTile);
  });
});

describe('\n\nGIVEN an unification tile slot', () => {
  const civilizationTile = createFarm();
  const unificationTile = createUnificationTile();
  const slot = createUnificationTileSlot(civilizationTile, unificationTile);

  describe('\nWHEN I check if it contains unification tile', () => {
    const contains = slot.contains('UnificationTile');

    it('\nTHEN I should get true', () => {
      expect(contains).toBeTruthy();
    });
  });

  describe('\nWHEN I check if it contains civilization tile', () => {
    const contains = slot.contains('CivilizationTile');

    it('\nTHEN I should get true', () => {
      expect(contains).toBeTruthy();
    });
  });
});
