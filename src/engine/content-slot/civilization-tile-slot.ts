import { Monument } from 'engine/monument';
import { CivilizationTile, UnificationTile } from 'engine/tile';

import { ContentSlot, createContentSlot } from './content-slot';
import { UnificationTileSlot, createUnificationTileSlot } from './unification-tile-slot';
import { MonumentSlot, createMonumentSlot } from './monument-slot';

export interface CivilizationTileSlot extends ContentSlot {
  tile: CivilizationTile;
  placeMonument(monument: Monument): MonumentSlot;
  placeUnificationTile(tile: UnificationTile): UnificationTileSlot;
}

export function createCivilizationTileSlot(tile: CivilizationTile): CivilizationTileSlot {
  const slot = Object.assign({},
    createContentSlot('CivilizationTileSlot', [tile]),
    {
      tile,
      placeMonument(monument: Monument): MonumentSlot {
        return createMonumentSlot(monument);
      },
      placeUnificationTile(unificationTile: UnificationTile): UnificationTileSlot {
        return createUnificationTileSlot(this.tile, unificationTile);
      }
    }
  );
  return Object.freeze(slot);
}
