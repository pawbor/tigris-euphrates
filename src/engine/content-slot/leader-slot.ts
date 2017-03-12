import { Leader } from 'engine/leader';

import { ContentSlot, ContentType } from './content-slot';

export interface LeaderSlot extends ContentSlot {
  slotType: 'LeaderSlot';
  leader: Leader;
}

export function createLeaderSlot(leader: Leader): LeaderSlot {
  return {
    get slotType(): 'LeaderSlot' { return 'LeaderSlot'; },
    get leader(): Leader { return leader; },
    contains(contentType: ContentType): boolean {
      return contentType === leader.contentType;
    }
  };
}
