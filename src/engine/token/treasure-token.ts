import { Content } from 'engine/content-slot';

import { Token } from './token';

export interface TreasureToken extends Token, Content {
  contentType: 'TreasureToken';
  tokenType: 'TreasureToken';
}

export function createTreasureToken(): TreasureToken {
  return {
    get contentType(): 'TreasureToken' { return 'TreasureToken'; },
    get tokenType(): 'TreasureToken' { return 'TreasureToken'; }
  };
}
