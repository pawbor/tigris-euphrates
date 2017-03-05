import { Leader } from 'engine/leader';

import { BoardSpaceSlot } from './board-space';

export interface LeaderSlot extends BoardSpaceSlot {
  type: 'Leader';
  leader: Leader;
}

export function createLeaderSlot(leader: Leader): LeaderSlot {
  return {
    get type(): 'Leader' { return 'Leader'; },
    get leader(): Leader { return leader; }
  };
}
