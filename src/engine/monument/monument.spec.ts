import {
  createMonument,
  createAllMonuments
} from './monument';

describe('createMonument', () => {
  it('should create a monument', () => {
    const baseColor = 'Red';
    const topColor = 'Blue';
    const leader = createMonument(baseColor, topColor);
    const expected = jasmine.objectContaining({baseColor, topColor});
    expect(leader).toEqual(expected);
  });
});

describe('createAllMonuments', () => {
  it('should create an array of all monuments', () => {
    const leader = createAllMonuments();
    const expected = jasmine.arrayContaining([
      jasmine.objectContaining({baseColor: 'Black', topColor: 'Blue'}),
      jasmine.objectContaining({baseColor: 'Black', topColor: 'Green'}),
      jasmine.objectContaining({baseColor: 'Black', topColor: 'Red'}),
      jasmine.objectContaining({baseColor: 'Blue', topColor: 'Green'}),
      jasmine.objectContaining({baseColor: 'Green', topColor: 'Red'}),
      jasmine.objectContaining({baseColor: 'Red', topColor: 'Blue'}),
    ]);
    expect(leader).toEqual(expected);
  });
});
