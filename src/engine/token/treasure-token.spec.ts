import { createTreasureToken } from './treasure-token';

describe('\n\nWHEN I create treasure token', () => {
  const token = createTreasureToken();

  it('\nTHEN tile should have valid content type', () => {
    expect(token.contentType).toEqual('TreasureToken');
  });

  it('\nTHEN tile should have valid tile type', () => {
    expect(token.tokenType).toEqual('TreasureToken');
  });
});
