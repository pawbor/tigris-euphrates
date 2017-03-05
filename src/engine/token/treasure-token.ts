import {Token} from './token';

export interface TreasureToken extends Token {
  type: 'TreasureToken';
}

export function createTreasureToken(): TreasureToken {
  return {
    get type(): 'TreasureToken' { return 'TreasureToken'; }
  };
}
