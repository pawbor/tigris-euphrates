import { TileType, CivilizationSphere } from 'engine/tile';

export type SlotType = 'EmptySlot' | 'CivilizationTileSlot' | 'CatastropheTileSlot' | 'UnificationTileSlot' | 'LeaderSlot';

export type ContentType = TileType | 'TreasureToken' | 'Monument' | 'Leader';

export interface Content {
  contentType: ContentType;
}

export interface ContentSlot {
  slotType: SlotType;
  contains(contentType: ContentType): boolean;
}
