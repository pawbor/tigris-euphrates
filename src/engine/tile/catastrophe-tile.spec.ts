import {
  createCatastropheTile,
} from './catastrophe-tile';

describe('createCatastropheTile', () => {
  it('should create a tile with UnificaionTile type', () => {
    const tile = createCatastropheTile();
    const expected = jasmine.objectContaining({type: 'CatastropheTile'});
    expect(tile).toEqual(expected);
  });
});
