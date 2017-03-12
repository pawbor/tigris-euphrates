import { createLeaders } from 'engine/leader';
import { createFarm, createCatastropheTile } from 'engine/tile';

import { EmptySlot, createEmptySlot } from './empty-slot';

describe('\n\nWHEN I create new empty slot', () => {
  const slot = createEmptySlot();

  it('\nTHEN the slot should have valid type', () => {
    expect(slot.slotType).toEqual('EmptySlot');
  });
});

describe('\n\nGIVEN an empty slot', () => {
  const slot = createEmptySlot(); ;

  describe('\nWHEN I check if it contains something', () => {
    const contains = slot.contains('Monument');

    it('\nTHEN I should get false', () => {
      expect(contains).toBeFalsy();
    });
  });

  describe('\nWHEN I place a civilization tile in that slot', () => {
    const tile = createFarm();
    const newSlot = slot.placeCivilizationTile(tile);

    it('\nTHEN new slot should have valid type', () => {
      expect(newSlot.slotType).toBe('CivilizationTileSlot');
      expect(slot.slotType).toBe('EmptySlot');
    });

    it('\nTHEN new slot should contain civilization tile', () => {
      expect(newSlot.tile).toBe(tile);
    });
  });

  describe('\nWHEN I place a catastrophe tile in that slot', () => {
    const tile = createCatastropheTile();
    const newSlot = slot.placeCatastropheTile(tile);

    it('\nTHEN new slot should have valid type', () => {
      expect(newSlot.slotType).toBe('CatastropheTileSlot');
      expect(slot.slotType).toBe('EmptySlot');
    });

    it('\nTHEN new slot should contain catastrophe tile', () => {
      expect(newSlot.tile).toBe(tile);
    });
  });

  describe('\nWHEN I place a leader in that slot', () => {
    const leader = createLeaders('Bull')[0];
    const newSlot = slot.placeLeader(leader);

    it('\nTHEN new slot should have valid type', () => {
      expect(newSlot.slotType).toBe('LeaderSlot');
      expect(slot.slotType).toBe('EmptySlot');
    });

    it('\nTHEN new slot should contain leader', () => {
      expect(newSlot.leader).toBe(leader);
    });
  });
});
