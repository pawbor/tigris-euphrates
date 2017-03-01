import {CivilizationTile} from '../tile';

export interface ClothBag {
  tiles: CivilizationTile[];
}

export function emptyClothBag(): ClothBag {
  const tiles = [];
  return {
    get tiles() { return tiles.slice(); }
  };
}
