import {
  createFarm,
  createMarket,
  createSettlement,
  createTemple
} from './civilization-tile';

describe('\n\nWHEN I create Farm tile', () => {
  const tile = createFarm();

  it('\nTHEN tile should have valid content type', () => {
    expect(tile.contentType).toContain('CivilizationTile');
    expect(tile.contentType).toContain('Farm');
  });

  it('\nTHEN tile should have valid tile type', () => {
    expect(tile.tileType).toEqual('CivilizationTile');
  });

  it('\nTHEN it should have valid sphere', () => {
    expect(tile.sphere).toEqual('Farm');
  });
});

describe('\n\nWHEN I create Market tile', () => {
  const tile = createMarket();

  it('\nTHEN tile should have valid content type', () => {
    expect(tile.contentType).toContain('CivilizationTile');
    expect(tile.contentType).toContain('Market');
  });

  it('\nTHEN tile should have valid tile type', () => {
    expect(tile.tileType).toEqual('CivilizationTile');
  });

  it('\nTHEN it should have valid sphere', () => {
    expect(tile.sphere).toEqual('Market');
  });
});

describe('\n\nWHEN I create Settlement tile', () => {
  const tile = createSettlement();

  it('\nTHEN tile should have valid content type', () => {
    expect(tile.contentType).toContain('CivilizationTile');
    expect(tile.contentType).toContain('Settlement');
  });

  it('\nTHEN tile should have valid tile type', () => {
    expect(tile.tileType).toEqual('CivilizationTile');
  });

  it('\nTHEN it should have valid sphere', () => {
    expect(tile.sphere).toEqual('Settlement');
  });
});

describe('\n\nWHEN I create Temple tile', () => {
  const tile = createTemple();

  it('\nTHEN tile should have valid content type', () => {
    expect(tile.contentType).toContain('CivilizationTile');
    expect(tile.contentType).toContain('Temple');
  });

  it('\nTHEN tile should have valid tile type', () => {
    expect(tile.tileType).toEqual('CivilizationTile');
  });

  it('\nTHEN it should have valid sphere', () => {
    expect(tile.sphere).toEqual('Temple');
  });
});
