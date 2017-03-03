import {Leader} from '../leader';
import {Tile} from '../tile';
import {Token} from '../token';

import {createPlayerScreen, initialPlayerScreen} from './player-screen';

describe('createPlayerScreen', () => {
  it('should create a player screen for a dynasty', () => {
    const dynasty = 'Archer';
    const leaders: Leader[] = [{dynasty, role: 'King'}];
    const tiles: Tile[] = [{type: 'UnificationTile'}];
    const tokens: Token[] = [{type: 'TreasureToken'}];
    const screen = createPlayerScreen(dynasty, leaders, tiles, tokens);
    const expected = jasmine.objectContaining({
      dynasty, leaders, tiles, tokens
    });
    expect(screen).toEqual(expected);
  });
});

describe('initialPlayerScreen', () => {
  it('should create initial player screen for a dynasty', () => {
    const dynasty = 'Archer';
    const screen = initialPlayerScreen(dynasty);
    const expected = jasmine.objectContaining({
      dynasty,
      leaders: jasmine.arrayContaining([
        jasmine.objectContaining({role: 'Farmer', dynasty}),
        jasmine.objectContaining({role: 'King', dynasty}),
        jasmine.objectContaining({role: 'Priest', dynasty}),
        jasmine.objectContaining({role: 'Trader', dynasty})
      ]),
      tiles: jasmine.arrayContaining([
        jasmine.objectContaining({type: 'CatastropheTile'}),
        jasmine.objectContaining({type: 'CatastropheTile'}),
        jasmine.objectContaining({type: 'UnificationTile'})
      ]),
      tokens: []
    });
    expect(screen).toEqual(expected);
  });
});
