import { Content } from 'engine/content-slot';

import { Tile } from './tile';

export interface CatastropheTile extends Tile, Content {};

export function createCatastropheTile(): CatastropheTile {
  return Object.freeze({
    contentType: ['CatastropheTile'],
    tileType: 'CatastropheTile'
  });
}
