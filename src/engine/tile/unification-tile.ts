import { Content } from 'engine/content-slot';

import { Tile } from './tile';

export interface UnificationTile extends Tile, Content {};

export function createUnificationTile(): UnificationTile {
  return Object.freeze({
    contentType: ['UnificationTile'],
    tileType: 'UnificationTile'
  });
}
