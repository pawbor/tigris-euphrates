import {
  createUnificationTile,
} from './unification-tile';

describe('createUnificationTile', () => {
  it('should create a tile with UnificaionTile type', () => {
    const tile = createUnificationTile();
    const expected = jasmine.objectContaining({type: 'UnificationTile'});
    expect(tile).toEqual(expected);
  });
});
