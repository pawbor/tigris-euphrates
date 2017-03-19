import { Leader } from 'engine/leader';
import { CivilizationTile, CatastropheTile } from 'engine/tile';

import { CatastropheTileSlot, createCatastropheTileSlot } from './catastrophe-tile-slot';
import { CivilizationTileSlot, createCivilizationTileSlot } from './civilization-tile-slot';
import { ContentSlot, createContentSlot } from './content-slot';
import { LeaderSlot, createLeaderSlot } from './leader-slot';

export interface EmptySlot extends ContentSlot {
  placeCivilizationTile(tile: CivilizationTile): CivilizationTileSlot;
  placeCatastropheTile(tile: CatastropheTile): CatastropheTileSlot;
  placeLeader(leader: Leader): LeaderSlot;
}

export function createEmptySlot(): EmptySlot {
  const slot = Object.assign({},
    createContentSlot('EmptySlot', []),
    {
      placeCivilizationTile(tile: CivilizationTile): CivilizationTileSlot {
        return createCivilizationTileSlot(tile);
      },
      placeCatastropheTile(tile: CatastropheTile): CatastropheTileSlot {
        return createCatastropheTileSlot(tile);
      },
      placeLeader(leader: Leader): LeaderSlot {
        return createLeaderSlot(leader);
      },
    }
  );
  return Object.freeze(slot);
};
