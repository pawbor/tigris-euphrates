import { ContentSlot, ContentType } from './content-slot';
import { CatastropheTile } from 'engine/tile';

export interface CatastropheTileSlot extends ContentSlot {
  slotType: 'CatastropheTileSlot';
  tile: CatastropheTile;
}

export function createCatastropheTileSlot(tile: CatastropheTile): CatastropheTileSlot {
  return {
    get slotType(): 'CatastropheTileSlot' { return 'CatastropheTileSlot'; },
    get tile(): CatastropheTile { return tile; },
    contains(contentType: ContentType): boolean {
      return contentType === tile.contentType;
    }
  };
}
