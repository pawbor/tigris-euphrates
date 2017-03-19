import { createLeaders } from 'engine/leader';
import { createFarm, createCatastropheTile } from 'engine/tile';

import { createEmptySlot } from './empty-slot';

describe('\n\nWHEN I create new empty slot', () => {
  const slot = createEmptySlot();

  it('\nTHEN the slot has valid type', () => {
    expect(slot.slotType).toEqual('EmptySlot');
  });
});

describe('\n\nGIVEN an empty slot', () => {
  const slot = createEmptySlot(); ;

  describe('\nWHEN I check if it contains something', () => {
    const contains = slot.contains('Monument');

    it('\nTHEN I get false', () => {
      expect(contains).toBeFalsy();
    });
  });

  describe('\nWHEN I place a civilization tile in that slot', () => {
    const tile = createFarm();
    const newSlot = slot.placeCivilizationTile(tile);

    it('\nTHEN new slot has valid type', () => {
      expect(newSlot.slotType).toBe('CivilizationTileSlot');
    });

    it('\nTHEN new slot contains civilization tile', () => {
      expect(newSlot.tile).toBe(tile);
    });
  });

  describe('\nWHEN I place a catastrophe tile in that slot', () => {
    const tile = createCatastropheTile();
    const newSlot = slot.placeCatastropheTile(tile);

    it('\nTHEN new slot has valid type', () => {
      expect(newSlot.slotType).toBe('CatastropheTileSlot');
    });

    it('\nTHEN new slot contains catastrophe tile', () => {
      expect(newSlot.tile).toBe(tile);
    });
  });

  describe('\nWHEN I place a leader in that slot', () => {
    const leader = createLeaders('Bull')[0];
    const newSlot = slot.placeLeader(leader);

    it('\nTHEN new slot has valid type', () => {
      expect(newSlot.slotType).toBe('LeaderSlot');
    });

    it('\nTHEN new slot contains leader', () => {
      expect(newSlot.leader).toBe(leader);
    });
  });
});
