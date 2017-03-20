import { Token } from './token';

export type ResourceType = 'Amulets' | 'Bricks' | 'Crops' | 'Goods';

export interface VictoryPointToken extends Token {
  resourceType: ResourceType;
}

function createVictoryPointToken(resourceType: ResourceType): VictoryPointToken {
  return Object.freeze({
    tokenType: 'VictoryPointToken',
    resourceType
  });
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
