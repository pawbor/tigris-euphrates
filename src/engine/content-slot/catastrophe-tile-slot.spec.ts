import { createCatastropheTile } from 'engine/tile';

import { createCatastropheTileSlot } from './catastrophe-tile-slot';

const tile = createCatastropheTile();

describe('\n\nWHEN I create new catastrophe tile slot', () => {
  const slot = createCatastropheTileSlot(tile);

  it('\nTHEN the slot has valid type', () => {
    expect(slot.slotType).toBe('CatastropheTileSlot');
  });

  it('\nTHEN the slot contains the tile', () => {
    expect(slot.tile).toBe(tile);
    expect(slot.content[0]).toBe(tile);
  });
});

describe('\n\nGIVEN a catastrophe tile slot', () => {
  const slot = createCatastropheTileSlot(tile);

  describe('\nWHEN I check if it contains catastrophe tile', () => {
    const truthy = slot.contains(tile.contentType);

    it('\nTHEN I get true', () => {
      expect(truthy).toBeTruthy();
    });
  });

  describe('\nWHEN I check if it contains something else', () => {
    const falsy = slot.contains('OtherContent');

    it('\nTHEN I get false', () => {
      expect(falsy).toBeFalsy();
    });
  });

  describe('\nWHEN I retrive catastrophe tile by content type', () => {
    const retrived = slot.getContent(tile.contentType);

    it('\nTHEN I get the tile', () => {
      expect(retrived[0]).toBe(tile);
    });
  });

  describe('\nWHEN I retrive something else', () => {
    const retrived = slot.getContent('OtherContent');

    it('\nTHEN I get nothing', () => {
      expect(retrived).toEqual([]);
    });
  });
});
