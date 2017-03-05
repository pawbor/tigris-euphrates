import { createEmptySlot } from './empty-slot';

export type BoardSpaceType = 'Ground' | 'Water' | 'Temple';

export type SlotType = 'Empty' | 'CivilizationTile' | 'CatastropheTile' | 'UnificationTile' | 'Leader';

export interface BoardSpaceSlot {
  type: SlotType;
}

export interface BoardSpace {
  type: BoardSpaceType;
  slot: BoardSpaceSlot;
}

export function emptyBoardSpace(type: BoardSpaceType): BoardSpace {
  const slot = createEmptySlot();
  return createBoardSpace(type, slot);
}

function createBoardSpace(type: BoardSpaceType, slot: BoardSpaceSlot): BoardSpace {
  return {
    get type(): BoardSpaceType { return type; },
    get slot(): BoardSpaceSlot { return slot; }
  };
}
