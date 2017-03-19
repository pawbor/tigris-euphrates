import { Monument } from 'engine/monument';

import { ContentSlot, createContentSlot } from './content-slot';

export interface MonumentSlot extends ContentSlot {
  monument: Monument;
}

export function createMonumentSlot(monument: Monument): MonumentSlot {
  const slot = Object.assign({},
    createContentSlot('MonumentSlot', [monument]),
    { monument }
  );
  return Object.freeze(slot);
}
