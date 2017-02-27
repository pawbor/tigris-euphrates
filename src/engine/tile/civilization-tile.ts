import {Tile} from './tile';

export interface CivilizationTile extends Tile {
  sphere: string;
};

export function createCivilizationTile(sphere: string): CivilizationTile {
  return {
    get type() { return 'CivilizationTile'; },
    get sphere() { return sphere; }
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
