import {Token, TokenType} from './token';

export function createTreasureToken(): Token {
  return {
    get type(): TokenType { return 'TreasureToken'; }
  };
}
