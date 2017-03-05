import { UnificationTile } from 'engine/tile';

import { BoardSpaceSlot } from './board-space';
import { CivilizationTileSlot } from './civilization-tile-slot';

export interface UnificationTileSlot extends BoardSpaceSlot {
  type: 'UnificationTile';
  covered: CivilizationTileSlot;
  tile: UnificationTile;
}

export function createUnificationTileSlot(covered: CivilizationTileSlot, tile: UnificationTile): UnificationTileSlot {
  return {
    get type(): 'UnificationTile' { return 'UnificationTile'; },
    get covered(): CivilizationTileSlot { return covered; },
    get tile(): UnificationTile { return tile; }
  };
}
