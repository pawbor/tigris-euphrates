import { Leader } from 'engine/leader';
import { CivilizationTile, CatastropheTile } from 'engine/tile';

import { BoardSpaceSlot } from './board-space';
import { CivilizationTileSlot, createCivilizationTileSlot } from './civilization-tile-slot';
import { CatastropheTileSlot, createCatastropheTileSlot } from './catastrophe-tile-slot';
import { LeaderSlot, createLeaderSlot } from './leader-slot';


export interface EmptySlot extends BoardSpaceSlot {
  type: 'Empty';
  placeCivilizationTile(tile: CivilizationTile): CivilizationTileSlot;
  placeCatastropheTile(tile: CatastropheTile): CatastropheTileSlot;
  placeLeader(leader: Leader): LeaderSlot;
}

export function createEmptySlot(): EmptySlot {
  return {
    get type(): 'Empty' { return 'Empty'; },
    placeCivilizationTile(tile: CivilizationTile): CivilizationTileSlot {
      return createCivilizationTileSlot(tile);
    },
    placeCatastropheTile(tile: CatastropheTile): CatastropheTileSlot {
      return createCatastropheTileSlot(tile);
    },
    placeLeader(leader: Leader): LeaderSlot {
      return createLeaderSlot(leader);
    }
  };
}
