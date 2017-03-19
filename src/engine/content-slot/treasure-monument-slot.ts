import { Monument } from 'engine/monument';
import { TreasureToken } from 'engine/token';

import { ContentSlot, createContentSlot } from './content-slot';

export interface TreasureMonumentSlot extends ContentSlot {
  monument: Monument;
  treasure: TreasureToken;
}

export function createTreasureMonumentSlot(
  monument: Monument,
  treasure: TreasureToken
): TreasureMonumentSlot {
  const slot = Object.assign({},
    createContentSlot('TreasureMonumentSlot', [monument, treasure]),
    {
      monument,
      treasure
    }
  );
  return Object.freeze(slot);
}
