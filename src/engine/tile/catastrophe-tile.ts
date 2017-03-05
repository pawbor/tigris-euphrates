import { Tile } from './tile';

export interface CatastropheTile extends Tile {
  type: 'CatastropheTile';
};

export function createCatastropheTile(): CatastropheTile {
  return {
    get type(): 'CatastropheTile' { return 'CatastropheTile'; }
  };
}
