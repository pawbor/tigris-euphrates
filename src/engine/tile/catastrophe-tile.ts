import { Content } from 'engine/content-slot';

import { Tile } from './tile';

export interface CatastropheTile extends Tile, Content {
  contentType: 'CatastropheTile';
  tileType: 'CatastropheTile';
};

export function createCatastropheTile(): CatastropheTile {
  return {
    get contentType(): 'CatastropheTile' { return 'CatastropheTile'; },
    get tileType(): 'CatastropheTile' { return 'CatastropheTile'; }
  };
}
