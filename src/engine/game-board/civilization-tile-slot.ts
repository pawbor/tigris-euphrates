import { Monument } from 'engine/monument';
import { CivilizationTile, UnificationTile } from 'engine/tile';
import { TreasureToken } from 'engine/token';

import { BoardSpaceSlot, SlotType } from './board-space';
import { EmptySlot } from './empty-slot';
import { UnificationTileSlot, createUnificationTileSlot } from './unification-tile-slot';

export interface CivilizationTileSlot extends BoardSpaceSlot {
  type: 'CivilizationTile';
  tile: CivilizationTile;
  monument?: Monument;
  treasure?: TreasureToken;
  placeMonument(monument: Monument): CivilizationTileSlot;
  placeTreasureToken(treasure: TreasureToken): CivilizationTileSlot;
  placeUnificationTile(tile: UnificationTile): UnificationTileSlot;
}

export function createCivilizationTileSlot(tile: CivilizationTile, monument?: Monument, treasure?: TreasureToken): CivilizationTileSlot {
  return {
    get type(): 'CivilizationTile' { return 'CivilizationTile'; },
    get monument(): Monument { return monument; },
    get tile(): CivilizationTile { return tile; },
    get treasure(): TreasureToken { return treasure; },
    // tslint:disable-next-line:no-shadowed-variable
    placeMonument(monument: Monument): CivilizationTileSlot {
      return placeMonument(this, monument);
    },
    // tslint:disable-next-line:no-shadowed-variable
    placeTreasureToken(treasure: TreasureToken): CivilizationTileSlot {
      return placeTreasureToken(this, treasure);
    },
    // tslint:disable-next-line:no-shadowed-variable
    placeUnificationTile(tile: UnificationTile): UnificationTileSlot {
      return placeUnificationTile(this, tile);
    },
  };
}

function placeTreasureToken(slot: CivilizationTileSlot, treasure: TreasureToken): CivilizationTileSlot {
  if (slot.treasure) {
    throw new Error('civilization-tile-slot.treasure-placed');
  }
  return createCivilizationTileSlot(slot.tile, slot.monument, treasure);
}

function placeMonument(slot: CivilizationTileSlot, monument: Monument): CivilizationTileSlot {
  if (slot.monument) {
    throw new Error('civilization-tile-slot.monument-placed');
  }
  return createCivilizationTileSlot(slot.tile, monument, slot.treasure);
}

function placeUnificationTile(slot: CivilizationTileSlot, tile: UnificationTile): UnificationTileSlot {
  return createUnificationTileSlot(slot, tile);
}
