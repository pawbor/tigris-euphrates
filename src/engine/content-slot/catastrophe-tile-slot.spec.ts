import { createCatastropheTile } from 'engine/tile';

import { createCatastropheTileSlot } from './catastrophe-tile-slot';

const tile = createCatastropheTile();

describe('\n\nWHEN I create new catastrophe tile slot', () => {
  const slot = createCatastropheTileSlot(tile);

  it('\nTHEN the slot should have valid type', () => {
    expect(slot.slotType).toEqual('CatastropheTileSlot');
  });

  it('\nTHEN the slot should contain the tile', () => {
    expect(slot.tile).toEqual(tile);
  });
});

describe('\n\nGIVEN a catastrophe tile slot', () => {
  const slot = createCatastropheTileSlot(tile);

  describe('\nWHEN I check if it contains catastrophe tile', () => {
    const contains = slot.contains('CatastropheTile');

    it('\nTHEN I should get true', () => {
      expect(contains).toBeTruthy();
    });
  });
});
