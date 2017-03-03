import {Tile, TileType} from './tile';

export function createUnificationTile(): Tile {
  return {
    get type(): TileType { return 'UnificationTile'; }
  };
}
