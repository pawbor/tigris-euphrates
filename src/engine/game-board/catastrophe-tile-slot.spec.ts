import { createCatastropheTile } from 'engine/tile';

import { createCatastropheTileSlot } from './catastrophe-tile-slot';

describe('createCatastropheTileSlot', () => {
  it('should create CatastropheTileSlot', () => {
    const tile = createCatastropheTile();
    const slot = createCatastropheTileSlot(tile);
    const expected = jasmine.objectContaining({
      type: 'CatastropheTile', tile
    });
    expect(slot).toEqual(expected);
  });
});
