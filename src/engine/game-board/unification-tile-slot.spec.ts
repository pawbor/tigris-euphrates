import { createUnificationTile, createFarm } from 'engine/tile';

import { createCivilizationTileSlot } from './civilization-tile-slot';
import { createUnificationTileSlot } from './unification-tile-slot';

describe('createUnificationTileSlot', () => {
  it('should create UnificationTileSlot', () => {
    const farm = createFarm();
    const covered = createCivilizationTileSlot(farm);
    const tile = createUnificationTile();
    const slot = createUnificationTileSlot(covered, tile);
    const expected = jasmine.objectContaining({
      type: 'UnificationTile', covered, tile
    });
    expect(slot).toEqual(expected);
  });
});
