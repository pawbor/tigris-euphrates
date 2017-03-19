import { UnificationTile, CivilizationTile } from 'engine/tile';

import { ContentSlot, createContentSlot } from './content-slot';

export interface UnificationTileSlot extends ContentSlot {
  civilizationTile: CivilizationTile;
  unificationTile: UnificationTile;
}

export function createUnificationTileSlot(
  civilizationTile: CivilizationTile,
  unificationTile: UnificationTile
): UnificationTileSlot {
  const content = [
    civilizationTile,
    unificationTile
  ];
  const slot = Object.assign({},
    createContentSlot('UnificationTileSlot', content),
    { civilizationTile, unificationTile }
  );
  return Object.freeze(slot);
}
