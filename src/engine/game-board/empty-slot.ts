import { BoardSpaceSlot } from './board-space';

export interface EmptySlot extends BoardSpaceSlot {
  type: 'Empty';
}

export function createEmptySlot(): EmptySlot {
  return {
    get type(): 'Empty' { return 'Empty'; }
  };
}
