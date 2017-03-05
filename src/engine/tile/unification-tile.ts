import { Tile } from './tile';

export interface UnificationTile extends Tile {
  type: 'UnificationTile';
};

export function createUnificationTile(): UnificationTile {
  return {
    get type(): 'UnificationTile' { return 'UnificationTile'; }
  };
}
