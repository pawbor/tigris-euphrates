import { Monument } from 'engine/monument';
import { CivilizationTile } from 'engine/tile';
import { TreasureToken } from 'engine/token';

import { ContentSlot, createContentSlot } from './content-slot';
import { TreasureMonumentSlot, createTreasureMonumentSlot } from './treasure-monument-slot';


export interface TreasureTempleSlot extends ContentSlot {
  temple: CivilizationTile;
  treasure: TreasureToken;
  placeMonument(monument: Monument): TreasureMonumentSlot;
}

export function createTreasureTempleSlot(
  temple: CivilizationTile,
  treasure: TreasureToken
): TreasureTempleSlot {
  if (temple.sphere !== 'Temple') {
    throw new Error('treasure-temple-slot.invalid-civilization-tile');
  }

  const slot = Object.assign({},
    createContentSlot('TreasureTempleSlot', [temple, treasure]),
    {
      temple,
      treasure,
      placeMonument(monument: Monument): TreasureMonumentSlot {
        return createTreasureMonumentSlot(monument, treasure);
      }
    }
  );
  return Object.freeze(slot);
}
