import { UnificationTile, CivilizationTile } from 'engine/tile';

import { ContentSlot, ContentType } from './content-slot';

export interface UnificationTileSlot extends ContentSlot {
  slotType: 'UnificationTileSlot';
  civilizationTile: CivilizationTile;
  unificationTile: UnificationTile;
}

export function createUnificationTileSlot(
  civilizationTile: CivilizationTile,
  unificationTile: UnificationTile
): UnificationTileSlot {
  return {
    get slotType(): 'UnificationTileSlot' { return 'UnificationTileSlot'; },
    get civilizationTile(): CivilizationTile { return civilizationTile; },
    get unificationTile(): UnificationTile { return unificationTile; },
    contains(contentType: ContentType): boolean {
      return contentType === unificationTile.contentType
        || contentType === civilizationTile.contentType;
    }
  };
}
