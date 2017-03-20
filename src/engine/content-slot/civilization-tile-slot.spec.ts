import { createAllMonuments } from 'engine/monument';
import { createFarm, createUnificationTile } from 'engine/tile';

import { createCivilizationTileSlot } from './civilization-tile-slot';

const tile = createFarm();
const monument = createAllMonuments()[0];
const unificationTile = createUnificationTile();

describe('\n\nWHEN I create new civilization tile slot', () => {
  const slot = createCivilizationTileSlot(tile);

  it('\nTHEN the slot has valid type', () => {
    expect(slot.slotType).toBe('CivilizationTileSlot');
  });

  it('\nTHEN the slot contains the tile', () => {
    expect(slot.tile).toBe(tile);
    expect(slot.content[0]).toBe(tile);
  });
});

describe('\n\nGIVEN a civilization tile slot', () => {
  const slot = createCivilizationTileSlot(tile);

  describe('\nWHEN I check if it contains civilization tile', () => {
    const truthy = slot.contains(tile.contentType);

    it('\nTHEN I get true', () => {
      expect(truthy).toBeTruthy();
    });
  });

  describe('\nWHEN I check if it contains something else', () => {
    const falsy = slot.contains(['OtherContent']);

    it('\nTHEN I get false', () => {
      expect(falsy).toBeFalsy();
    });
  });

  describe('\nWHEN I retrive civilization tile by content type', () => {
    const retrived = slot.getContent(tile.contentType);

    it('\nTHEN I get the tile', () => {
      expect(retrived[0]).toBe(tile);
    });
  });

  describe('\nWHEN I retrive something else', () => {
    const retrived = slot.getContent(['OtherContent']);

    it('\nTHEN I get nothing', () => {
      expect(retrived).toEqual([]);
    });
  });

  describe('\nWHEN I place an unification tile in that slot', () => {
    const newSlot = slot.placeUnificationTile(unificationTile);

    it('\nTHEN new slot should have valid type', () => {
      expect(newSlot.slotType).toBe('UnificationTileSlot');
    });

    it('\nTHEN new slot should contain unification tile', () => {
      expect(newSlot.unificationTile).toBe(unificationTile);
    });

    it('\nTHEN new slot should contain civilization tile', () => {
      expect(newSlot.civilizationTile).toBe(slot.tile);
    });
  });

  describe('\nWHEN I place a momument in that slot', () => {
    const newSlot = slot.placeMonument(monument);

    it('\nTHEN new slot should have valid type', () => {
      expect(newSlot.slotType).toBe('MonumentSlot');
    });

    it('\nTHEN new slot should contain monument', () => {
      expect(newSlot.monument).toBe(monument);
    });
  });
});
