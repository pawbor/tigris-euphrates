import { Tile, TileType } from './tile';

export type CivilizationSphere = 'Temple' | 'Farm' | 'Settlement' | 'Market';

export interface CivilizationTile extends Tile {
  type: 'CivilizationTile';
  sphere: CivilizationSphere;
};

function createCivilizationTile(sphere: CivilizationSphere): CivilizationTile {
  return {
    get type(): 'CivilizationTile' { return 'CivilizationTile'; },
    get sphere(): CivilizationSphere { return sphere; }
  };
}

export function createTemple(): CivilizationTile {
  return createCivilizationTile('Temple');
};

export function createFarm(): CivilizationTile {
  return createCivilizationTile('Farm');
};

export function createSettlement(): CivilizationTile {
  return createCivilizationTile('Settlement');
};

export function createMarket(): CivilizationTile {
  return createCivilizationTile('Market');
};
