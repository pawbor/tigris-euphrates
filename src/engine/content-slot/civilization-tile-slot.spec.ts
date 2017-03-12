import { createAllMonuments } from 'engine/monument';
import { createFarm, createUnificationTile } from 'engine/tile';
import { createTreasureToken } from 'engine/token';

import { newCivilizationTileSlot } from './civilization-tile-slot';

const tile = createFarm();
const monument = createAllMonuments()[0];
const treasure = createTreasureToken();
const unificationTile = createUnificationTile();

describe('\n\nWHEN I create new civilization tile slot', () => {
  const slot = newCivilizationTileSlot(tile);

  it('\nTHEN the slot should have valid type', () => {
    expect(slot.slotType).toBe('CivilizationTileSlot');
  });

  it('\nTHEN the slot should contain the tile', () => {
    expect(slot.tile).toBe(tile);
  });
});

describe('\n\nGIVEN a civilization tile slot without monument and treasure', () => {
  const slot = newCivilizationTileSlot(tile);

  describe('\nWHEN I check if it contains civilization tile', () => {
    const contains = slot.contains('CivilizationTile');

    it('\nTHEN I should get true', () => {
      expect(contains).toBeTruthy();
    });
  });

  describe('\nWHEN I place an unification tile in that slot', () => {
    const newSlot = slot.placeUnificationTile(unificationTile);

    it('\nTHEN new slot should have valid type', () => {
      expect(newSlot.slotType).toBe('UnificationTileSlot');
      expect(slot.slotType).toBe('CivilizationTileSlot');
    });

    it('\nTHEN new slot should contain unification tile', () => {
      expect(newSlot.unificationTile).toBe(unificationTile);
    });

    it('\nTHEN new slot should contain civilization tile', () => {
      expect(newSlot.civilizationTile).toBe(slot.tile);
    });
  });
});

describe('\n\nGIVEN a civilization tile slot without a momunemnt', () => {
  const slot = newCivilizationTileSlot(tile)
    .placeTreasureToken(treasure);

  describe('\nWHEN I check if it contains momument', () => {
    const contains = slot.contains('Monument');

    it('\nTHEN I should get false', () => {
      expect(contains).toBeFalsy();
    });
  });

  describe('\nWHEN I place a momument in that slot', () => {
    const newSlot = slot.placeMonument(monument);

    it('\nTHEN new slot should have valid type', () => {
      expect(newSlot.slotType).toBe('CivilizationTileSlot');
    });

    it('\nTHEN new slot should contain monument', () => {
      expect(newSlot.monument).toBe(monument);
      expect(slot.monument).not.toBeDefined();
    });

    it('\nTHEN civilization tile should not change', () => {
      expect(newSlot.tile).toBe(slot.tile);
    });

    it('\nTHEN treasure should not change', () => {
      expect(newSlot.treasure).toBe(slot.treasure);
    });
  });
});

describe('\n\nGIVEN a civilization tile slot with a monument', () => {
  const slot = newCivilizationTileSlot(tile)
    .placeMonument(monument);

  describe('\nWHEN I check if it contains momument', () => {
    const contains = slot.contains('Monument');

    it('\nTHEN I should get true', () => {
      expect(contains).toBeTruthy();
    });
  });

  describe('\nWHEN I try to place a treasure in that slot', () => {
    const callFn = () => slot.placeMonument(monument);

    it('\nTHEN it should fali', () => {
      expect(callFn).toThrowError('civilization-tile-slot.monument-placed');
    });
  });

  describe('\nWHEN I try to place a unification tile in that slot', () => {
    const callFn = () => slot.placeUnificationTile(unificationTile);

    it('\nTHEN it should fali', () => {
      expect(callFn).toThrowError('civilization-tile-slot.monument-placed');
    });
  });
});

describe('\n\nGIVEN a civilization tile slot without a treasure', () => {
  const slot = newCivilizationTileSlot(tile)
    .placeMonument(monument);

  describe('\nWHEN I check if it contains treasure', () => {
    const contains = slot.contains('TreasureToken');

    it('\nTHEN I should get false', () => {
      expect(contains).toBeFalsy();
    });
  });

  describe('\nWHEN I place a treasure in that slot', () => {
    const newSlot = slot.placeTreasureToken(treasure);

    it('\nTHEN new slot should have valid type', () => {
      expect(newSlot.slotType).toBe('CivilizationTileSlot');
    });

    it('\nTHEN new slot should contain treasure', () => {
      expect(newSlot.treasure).toBe(treasure);
      expect(slot.treasure).not.toBeDefined();
    });

    it('\nTHEN civilization tile should not change', () => {
      expect(newSlot.tile).toBe(slot.tile);
    });

    it('\nTHEN monument should not change', () => {
      expect(newSlot.monument).toBe(slot.monument);
    });
  });
});

describe('\n\nGIVEN a civilization tile slot with a treasure', () => {
  const slot = newCivilizationTileSlot(tile)
    .placeTreasureToken(treasure);

  describe('\nWHEN I check if it contains treasure', () => {
    const contains = slot.contains('TreasureToken');

    it('\nTHEN I should get true', () => {
      expect(contains).toBeTruthy();
    });
  });

  describe('\nWHEN I try to place a treasure in that slot', () => {
    const callFn = () => slot.placeTreasureToken(treasure);

    it('\nTHEN it should fali', () => {
      expect(callFn).toThrowError('civilization-tile-slot.treasure-placed');
    });
  });

  describe('\nWHEN I try to place a unification tile in that slot', () => {
    const callFn = () => slot.placeUnificationTile(unificationTile);

    it('\nTHEN it should fali', () => {
      expect(callFn).toThrowError('civilization-tile-slot.treasure-placed');
    });
  });
});
