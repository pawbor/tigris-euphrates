import { Dynasty } from 'engine/common';
import { Leader, createLeaders } from 'engine/leader';
import { Tile, createCatastropheTile, createUnificationTile } from 'engine/tile';
import { Token } from 'engine/token';

export interface PlayerScreen {
  dynasty: Dynasty;
  leaders: Leader[];
  tiles: Tile[];
  tokens: Token[];
};

function createPlayerScreen(
  dynasty: Dynasty,
  leaders: Leader[],
  tiles: Tile[],
  tokens: Token[]
): PlayerScreen {
  return {
    get dynasty() { return dynasty; },
    get leaders() { return leaders.slice(); },
    get tiles() { return tiles.slice(); },
    get tokens() { return tokens.slice(); }
  };
}

export function initialPlayerScreen(dynasty: Dynasty): PlayerScreen {
  const leaders = createLeaders(dynasty);
  const tiles = [
    createCatastropheTile(),
    createCatastropheTile(),
    createUnificationTile()
  ];
  const tokens = [];
  return createPlayerScreen(dynasty, leaders, tiles, tokens);
}
