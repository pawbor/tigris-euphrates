import {
  createCatastropheTile,
} from './catastrophe-tile';

describe('\n\nWHEN I create catastrophe tile', () => {
  const tile = createCatastropheTile();

  it('\nTHEN tile should have valid content type', () => {
    expect(tile.contentType).toEqual('CatastropheTile');
  });

  it('\nTHEN tile should have valid tile type', () => {
    expect(tile.tileType).toEqual('CatastropheTile');
  });
});
