import { BoardSpaceSlot } from './board-space';
import { CatastropheTile } from 'engine/tile';

export interface CatastropheTileSlot extends BoardSpaceSlot {
  type: 'CatastropheTile';
  tile: CatastropheTile;
}

export function createCatastropheTileSlot(tile: CatastropheTile): CatastropheTileSlot {
  return {
    get type(): 'CatastropheTile' { return 'CatastropheTile'; },
    get tile(): CatastropheTile { return tile; }
  };
}
