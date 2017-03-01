import {
  createTreasureToken
} from './treasure-token';

describe('createTreasureToken', () => {
  it('should create a treasure token', () => {
    const tile = createTreasureToken();
    const expected = jasmine.objectContaining({type: 'TreasureToken'});
    expect(tile).toEqual(expected);
  });
});
