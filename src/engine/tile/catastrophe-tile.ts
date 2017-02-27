import {Tile} from './tile';

export function createCatastropheTile(): Tile {
  return {
    get type() { return 'CatastropheTile'; }
  };
}
