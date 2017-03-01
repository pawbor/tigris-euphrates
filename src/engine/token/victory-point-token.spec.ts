import {
  createVictoryPointToken,
  createAmulets,
  createBricks,
  createCrops,
  createGoods
} from './victory-point-token';

describe('createVictoryPointToken', () => {
  it('should create Amulets token', () => {
    const tile = createVictoryPointToken('Amulets');
    const expected = jasmine.objectContaining({
      type: 'VictoryPointToken',
      resource: 'Amulets'
    });
    expect(tile).toEqual(expected);
  });
});

describe('createAmulets', () => {
  it('should create Amulets token', () => {
    const tile = createAmulets();
    const expected = jasmine.objectContaining({
      type: 'VictoryPointToken',
      resource: 'Amulets'
    });
    expect(tile).toEqual(expected);
  });
});

describe('createBricks', () => {
  it('should create Bricks token', () => {
    const tile = createBricks();
    const expected = jasmine.objectContaining({
      type: 'VictoryPointToken',
      resource: 'Bricks'
    });
    expect(tile).toEqual(expected);
  });
});

describe('createCrops', () => {
  it('should create Crops token', () => {
    const tile = createCrops();
    const expected = jasmine.objectContaining({
      type: 'VictoryPointToken',
      resource: 'Crops'
    });
    expect(tile).toEqual(expected);
  });
});

describe('createGoods', () => {
  it('should create Goods token', () => {
    const tile = createGoods();
    const expected = jasmine.objectContaining({
      type: 'VictoryPointToken',
      resource: 'Goods'
    });
    expect(tile).toEqual(expected);
  });
});
