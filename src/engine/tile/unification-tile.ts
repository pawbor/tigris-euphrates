import { Content } from 'engine/content-slot';

import { Tile } from './tile';

export interface UnificationTile extends Tile, Content {
  contentType: 'UnificationTile';
  tileType: 'UnificationTile';
};

export function createUnificationTile(): UnificationTile {
  return {
    get contentType(): 'UnificationTile' { return 'UnificationTile'; },
    get tileType(): 'UnificationTile' { return 'UnificationTile'; }
  };
}
