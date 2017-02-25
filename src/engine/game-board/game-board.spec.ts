import {
  BoardSpaceType,
} from './board-space';

import {
  createGameBoard,
  GameBoard,
  boardMatchesDefinition
} from './game-board';

describe('createGameBoard', () => {
  it('should create a GameBoard object', () => {
    const board = createGameBoard({spaces: []});
    expect(board).toBeDefined();
  });

   describe('- created GameBoard object', () => {
    const def = {
      spaces: [[
        BoardSpaceType.GROUND,
        BoardSpaceType.WATER,
        BoardSpaceType.TEMPLE
      ]]
    };

    it('should match GameBoardDef object', () => {
      const board = createGameBoard(def);
      const match = boardMatchesDefinition(board, def);
      expect(match).toBeTruthy(`${board} not matching ${def}`);
    });
  });
});


describe('boardMatchesDefinition', () => {
  const board = {spaces: [[{type: BoardSpaceType.GROUND}]]};
  const def = {spaces: [[BoardSpaceType.GROUND]]};
  const otherDef = {spaces: [[BoardSpaceType.WATER]]};

  it('should return true when GameBoard match GameBoardDef', () => {
    const result = boardMatchesDefinition(board, def);
    expect(result).toBeTruthy();
  });

  it('should return false when GameBoard doesn\'t match GameBoardDef', () => {
    const result = boardMatchesDefinition(board, otherDef);
    expect(result).toBeFalsy();
  });
});
