import { ContentSlot, createEmptySlot } from 'engine/content-slot';

export type BoardSpaceType = 'Ground' | 'Water' | 'Temple';

export interface BoardSpace {
  type: BoardSpaceType;
  slot: ContentSlot;
}

export function emptyBoardSpace(type: BoardSpaceType): BoardSpace {
  const slot = createEmptySlot();
  return createBoardSpace(type, slot);
}

function createBoardSpace(type: BoardSpaceType, slot: ContentSlot): BoardSpace {
  return {
    get type(): BoardSpaceType { return type; },
    get slot(): ContentSlot { return slot; }
  };
}
