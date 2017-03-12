import {
  createUnificationTile,
} from './unification-tile';

describe('\n\nWHEN I create unification tile', () => {
  const tile = createUnificationTile();

  it('\nTHEN tile should have valid content type', () => {
    expect(tile.contentType).toEqual('UnificationTile');
  });

  it('\nTHEN tile should have valid tile type', () => {
    expect(tile.tileType).toEqual('UnificationTile');
  });
});
