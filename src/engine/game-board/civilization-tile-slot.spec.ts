import { createEmptySlot } from './empty-slot';
import { createAllMonuments } from 'engine/monument';
import { createFarm } from 'engine/tile';
import { createTreasureToken } from 'engine/token';

import {
  CivilizationTileSlot,
  createCivilizationTileSlot
} from './civilization-tile-slot';

const tile = createFarm();
const monument = createAllMonuments()[0];
const treasure = createTreasureToken();

describe('createCivilizationTileSlot', () => {
  it('should create CivilizationTileSlot', () => {
    const slot = createCivilizationTileSlot(tile, monument, treasure);
    const expected = jasmine.objectContaining({
      type: 'CivilizationTile', tile, monument, treasure
    });
    expect(slot).toEqual(expected);
  });
});

describe('CivilizationTileSlot', () => {
  const withTile = createCivilizationTileSlot(tile, undefined, undefined);
  const withMonument = createCivilizationTileSlot(tile, monument, undefined);
  const withTreasure = createCivilizationTileSlot(tile, undefined, treasure);

  describe('placeMonument', () => {
    it('should create CivilizationTileSlot with monument', () => {
      const slot = withTreasure.placeMonument(monument);
      const expected = jasmine.objectContaining({
        type: 'CivilizationTile', tile, monument, treasure
      });
      expect(slot).toEqual(expected);
      expect(withTreasure.monument).toBeUndefined();
    });

    it('should throw error if monument is already placed', () => {
      const callFn = () => withMonument.placeMonument(monument);
      const expected = 'civilization-tile-slot.monument-placed';
      expect(callFn).toThrowError(expected);
    });
  });

  describe('placeTreasureToken', () => {
    it('should create CivilizationTileSlot with treasure', () => {
      const slot = withMonument.placeTreasureToken(treasure);
      const expected = jasmine.objectContaining({
        type: 'CivilizationTile', tile, monument, treasure
      });
      expect(slot).toEqual(expected);
      expect(withMonument.treasure).toBeUndefined();
    });

    it('should throw error if treasure is already placed', () => {
      const callFn = () => withTreasure.placeTreasureToken(treasure);
      const expected = 'civilization-tile-slot.treasure-placed';
      expect(callFn).toThrowError(expected);
    });
  });
});


