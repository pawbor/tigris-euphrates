import {Tile} from './tile';

export function createUnificationTile(): Tile {
  return {
    get type() { return 'UnificationTile'; }
  };
}
