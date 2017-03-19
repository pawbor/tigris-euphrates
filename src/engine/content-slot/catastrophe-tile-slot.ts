import { CatastropheTile } from 'engine/tile';

import { ContentSlot, createContentSlot } from './content-slot';

export interface CatastropheTileSlot extends ContentSlot {
  tile: CatastropheTile;
}

export function createCatastropheTileSlot(tile: CatastropheTile): CatastropheTileSlot {
  const slot = Object.assign({},
    createContentSlot('CatastropheTileSlot', [tile]),
    { tile }
  );
  return Object.freeze(slot);
}
