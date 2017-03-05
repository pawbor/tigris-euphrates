import {
  createFarm,
  createMarket,
  createSettlement,
  createTemple
} from './civilization-tile';

describe('createFarm', () => {
  it('should create a tile with CivilizationTile type', () => {
    const tile = createFarm();
    const expected = jasmine.objectContaining({ type: 'CivilizationTile' });
    expect(tile).toEqual(expected);
  });

  it('should create a tile with Farm sphere', () => {
    const tile = createFarm();
    const expected = jasmine.objectContaining({ sphere: 'Farm' });
    expect(tile).toEqual(expected);
  });
});

describe('createMarket', () => {
  it('should create a tile with CivilizationTile type', () => {
    const tile = createMarket();
    const expected = jasmine.objectContaining({ type: 'CivilizationTile' });
    expect(tile).toEqual(expected);
  });

  it('should create a tile with Market sphere', () => {
    const tile = createMarket();
    const expected = jasmine.objectContaining({ sphere: 'Market' });
    expect(tile).toEqual(expected);
  });
});

describe('createSettlement', () => {
  it('should create a tile with CivilizationTile type', () => {
    const tile = createSettlement();
    const expected = jasmine.objectContaining({ type: 'CivilizationTile' });
    expect(tile).toEqual(expected);
  });

  it('should create a tile with Settlement sphere', () => {
    const tile = createSettlement();
    const expected = jasmine.objectContaining({ sphere: 'Settlement' });
    expect(tile).toEqual(expected);
  });
});

describe('createTemple', () => {
  it('should create a tile with CivilizationTile type', () => {
    const tile = createTemple();
    const expected = jasmine.objectContaining({ type: 'CivilizationTile' });
    expect(tile).toEqual(expected);
  });

  it('should create a tile with Temple sphere', () => {
    const tile = createTemple();
    const expected = jasmine.objectContaining({ sphere: 'Temple' });
    expect(tile).toEqual(expected);
  });
});
