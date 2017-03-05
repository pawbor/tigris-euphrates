import { createFarm, createCatastropheTile } from 'engine/tile';

import { EmptySlot, createEmptySlot } from './empty-slot';

describe('createEmptySlot', () => {
  it('should create EmptySlot', () => {
    const slot = createEmptySlot();
    const expected = jasmine.objectContaining({
      type: 'Empty'
    });
    expect(slot).toEqual(expected);
  });
});

describe('EmptySlot', () => {
  const empty = createEmptySlot();

  describe('placeCivilizationTile', () => {
    it('should create CivilizationTileSlot', () => {
      const tile = createFarm();
      const slot = empty.placeCivilizationTile(tile);
      const expected = jasmine.objectContaining({
        type: 'CivilizationTile',
        tile,
        monument: undefined,
        treasure: undefined
      });
      expect(slot).toEqual(expected);
      expect(empty.type).toEqual('Empty');
    });
  });

  describe('placeCatastropheTile', () => {
    it('should create CatastropheTileSlot', () => {
      const tile = createCatastropheTile();
      const slot = empty.placeCatastropheTile(tile);
      const expected = jasmine.objectContaining({
        type: 'CatastropheTile',
        tile
      });
      expect(slot).toEqual(expected);
      expect(empty.type).toEqual('Empty');
    });
  });
});
