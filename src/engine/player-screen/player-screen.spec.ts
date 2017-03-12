import { Leader } from 'engine/leader';
import { Tile } from 'engine/tile';
import { Token } from 'engine/token';

import { initialPlayerScreen } from './player-screen';

describe('initialPlayerScreen', () => {
  it('should create initial player screen for a dynasty', () => {
    const dynasty = 'Archer';
    const screen = initialPlayerScreen(dynasty);
    const expected = jasmine.objectContaining({
      dynasty,
      leaders: jasmine.arrayContaining([
        jasmine.objectContaining({ role: 'Farmer', dynasty }),
        jasmine.objectContaining({ role: 'King', dynasty }),
        jasmine.objectContaining({ role: 'Priest', dynasty }),
        jasmine.objectContaining({ role: 'Trader', dynasty })
      ]),
      tiles: jasmine.arrayContaining([
        jasmine.objectContaining({ tileType: 'CatastropheTile' }),
        jasmine.objectContaining({ tileType: 'CatastropheTile' }),
        jasmine.objectContaining({ tileType: 'UnificationTile' })
      ]),
      tokens: []
    });
    expect(screen).toEqual(expected);
  });
});
