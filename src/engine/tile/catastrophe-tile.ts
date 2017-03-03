import {Tile, TileType} from './tile';

export function createCatastropheTile(): Tile {
  return {
    get type(): TileType { return 'CatastropheTile'; }
  };
}
