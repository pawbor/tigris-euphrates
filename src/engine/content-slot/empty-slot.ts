import { Leader } from 'engine/leader';
import { CivilizationTile, CatastropheTile } from 'engine/tile';

import { ContentSlot } from './content-slot';
import { CivilizationTileSlot, newCivilizationTileSlot } from './civilization-tile-slot';
import { CatastropheTileSlot, createCatastropheTileSlot } from './catastrophe-tile-slot';
import { LeaderSlot, createLeaderSlot } from './leader-slot';


export interface EmptySlot extends ContentSlot {
  slotType: 'EmptySlot';
  placeCivilizationTile(tile: CivilizationTile): CivilizationTileSlot;
  placeCatastropheTile(tile: CatastropheTile): CatastropheTileSlot;
  placeLeader(leader: Leader): LeaderSlot;
}

export function createEmptySlot(): EmptySlot {
  return {
    get slotType(): 'EmptySlot' { return 'EmptySlot'; },
    placeCivilizationTile(tile: CivilizationTile): CivilizationTileSlot {
      return newCivilizationTileSlot(tile);
    },
    placeCatastropheTile(tile: CatastropheTile): CatastropheTileSlot {
      return createCatastropheTileSlot(tile);
    },
    placeLeader(leader: Leader): LeaderSlot {
      return createLeaderSlot(leader);
    },
    contains() { return false; }
  };
}
