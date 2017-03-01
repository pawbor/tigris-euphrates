import {
  emptyClothBag
} from './cloth-bag';

describe('emptyClothBag', () => {
  it('should create an empty cloth bag', () => {
    const bag = emptyClothBag();
    const expected = jasmine.objectContaining({tiles: []});
    expect(bag).toEqual(expected);
  });
});
