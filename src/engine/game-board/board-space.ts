import {
  Content, ContentSlot, createEmptySlot, createTreasureTempleSlot
} from 'engine/content-slot';
import { createTemple } from 'engine/tile';
import { createTreasureToken } from 'engine/token';

import { BoardSpaceType } from './game-board-def';

export interface BoardSpace {
  type: BoardSpaceType;
  slot: ContentSlot;
  isEmpty: boolean;
  contains(contentType: string[]): boolean;
  getContent(contentType: string[]): Content[];
}

const defaultSlotFactory = () => createEmptySlot();

const slotFactoriesMap = {
  'Temple': () => {
    const temple = createTemple();
    const treasure = createTreasureToken();
    return createTreasureTempleSlot(temple, treasure);
  }
};

export function initBoardSpace(type: BoardSpaceType): BoardSpace {
  const slotFactory = slotFactoriesMap[type] || defaultSlotFactory;
  const slot = slotFactory();
  return createBoardSpace(type, slot);
}

function createBoardSpace(type: BoardSpaceType, slot: ContentSlot): BoardSpace {
  return Object.freeze({
    type,
    slot,
    get isEmpty(): boolean {
      return slot.slotType === 'EmptySlot';
    },
    contains(contentType: string[]): boolean {
      return slot.contains(contentType);
    },
    getContent(contentType: string[]): Content[] {
      return slot.getContent(contentType);
    }
  });
}
