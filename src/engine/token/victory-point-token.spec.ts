import {
  createAmulets,
  createBricks,
  createCrops,
  createGoods
} from './victory-point-token';

describe('\n\nWHEN I create Amulets token', () => {
  const token = createAmulets();

  it('\nTHEN token should have valid token type', () => {
    expect(token.tokenType).toEqual('VictoryPointToken');
  });

  it('\nTHEN token should have valid recource type', () => {
    expect(token.resourceType).toEqual('Amulets');
  });
});

describe('\n\nWHEN I create Bricks token', () => {
  const token = createBricks();

  it('\nTHEN token should have valid token type', () => {
    expect(token.tokenType).toEqual('VictoryPointToken');
  });

  it('\nTHEN token should have valid recource type', () => {
    expect(token.resourceType).toEqual('Bricks');
  });
});

describe('\n\nWHEN I create Crops token', () => {
  const token = createCrops();

  it('\nTHEN token should have valid token type', () => {
    expect(token.tokenType).toEqual('VictoryPointToken');
  });

  it('\nTHEN token should have valid recource type', () => {
    expect(token.resourceType).toEqual('Crops');
  });
});

describe('\n\nWHEN I create Goods token', () => {
  const token = createGoods();

  it('\nTHEN token should have valid token type', () => {
    expect(token.tokenType).toEqual('VictoryPointToken');
  });

  it('\nTHEN token should have valid recource type', () => {
    expect(token.resourceType).toEqual('Goods');
  });
});
