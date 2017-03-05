import { createEmptySlot } from './empty-slot';
import { createAllMonuments } from 'engine/monument';
import { createFarm, createUnificationTile } from 'engine/tile';
import { createTreasureToken } from 'engine/token';

import {
  CivilizationTileSlot,
  createCivilizationTileSlot
} from './civilization-tile-slot';

const farm = createFarm();
const monument = createAllMonuments()[0];
const treasure = createTreasureToken();
const unificationTile = createUnificationTile();

describe('createCivilizationTileSlot', () => {
  it('should create CivilizationTileSlot', () => {
    const slot = createCivilizationTileSlot(farm, monument, treasure);
    const expected = jasmine.objectContaining({
      type: 'CivilizationTile', tile: farm, monument, treasure
    });
    expect(slot).toEqual(expected);
  });
});

describe('CivilizationTileSlot', () => {
  const withTile = createCivilizationTileSlot(farm, undefined, undefined);
  const withMonument = createCivilizationTileSlot(farm, monument, undefined);
  const withTreasure = createCivilizationTileSlot(farm, undefined, treasure);

  describe('placeMonument', () => {
    it('should create CivilizationTileSlot with monument', () => {
      const slot = withTreasure.placeMonument(monument);
      const expected = jasmine.objectContaining({
        type: 'CivilizationTile', tile: farm, monument, treasure
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
        type: 'CivilizationTile', tile: farm, monument, treasure
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

  describe('placeUnificationTile', () => {
    it('should create UnificationTileSlot', () => {
      const slot = withTile.placeUnificationTile(unificationTile);
      const expected = jasmine.objectContaining({
        type: 'UnificationTile', covered: withTile, tile: unificationTile
      });
      expect(slot).toEqual(expected);
    });
  });
});


