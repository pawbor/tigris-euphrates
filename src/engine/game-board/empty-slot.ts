import { CivilizationTile } from 'engine/tile';

import { BoardSpaceSlot } from './board-space';
import { CivilizationTileSlot, createCivilizationTileSlot } from './civilization-tile-slot';

export interface EmptySlot extends BoardSpaceSlot {
  type: 'Empty';
  placeCivilizationTile(tile: CivilizationTile): CivilizationTileSlot;
}

export function createEmptySlot(): EmptySlot {
  return {
    get type(): 'Empty' { return 'Empty'; },
    placeCivilizationTile(tile: CivilizationTile): CivilizationTileSlot {
      return placeCivilizationTile(this, tile);
    }
  };
}

function placeCivilizationTile(slot: EmptySlot, tile: CivilizationTile): CivilizationTileSlot {
  return createCivilizationTileSlot(tile);
}
