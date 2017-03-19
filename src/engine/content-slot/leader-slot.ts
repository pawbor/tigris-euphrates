import { Leader } from 'engine/leader';

import { ContentSlot, createContentSlot } from './content-slot';

export interface LeaderSlot extends ContentSlot {
  leader: Leader;
}

export function createLeaderSlot(leader: Leader): LeaderSlot {
  const slot = Object.assign({},
    createContentSlot('LeaderSlot', [leader]),
    { leader }
  );
  return Object.freeze(slot);
}
