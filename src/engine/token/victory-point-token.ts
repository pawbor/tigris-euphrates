import {Token, TokenType} from './token';

export type ResourceType = 'Amulets' | 'Bricks' | 'Crops' | 'Goods';

export interface VictoryPointToken extends Token {
  resource: ResourceType;
}

export function createVictoryPointToken(resource: ResourceType): VictoryPointToken {
  return {
    get type(): TokenType { return 'VictoryPointToken'; },
    get resource() { return resource; }
  };
}

export function createAmulets(): VictoryPointToken {
  return createVictoryPointToken('Amulets');
}

export function createBricks(): VictoryPointToken {
  return createVictoryPointToken('Bricks');
}

export function createCrops(): VictoryPointToken {
  return createVictoryPointToken('Crops');
}

export function createGoods(): VictoryPointToken {
  return createVictoryPointToken('Goods');
}
