import { createFarm } from 'engine/tile';

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
    it('should create TileSlot with CivilizationTile', () => {
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
});
