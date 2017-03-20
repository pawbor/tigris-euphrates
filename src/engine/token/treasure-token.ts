import { Content } from 'engine/content-slot';

import { Token } from './token';

export interface TreasureToken extends Token, Content {}

export function createTreasureToken(): TreasureToken {
  return Object.freeze({
    contentType: ['TreasureToken'],
    tokenType: 'TreasureToken'
  });
}
