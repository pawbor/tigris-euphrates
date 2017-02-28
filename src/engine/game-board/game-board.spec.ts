import {
  BoardSpaceType,
} from './board-space';

import {
  createGameBoard,
  validateGameBoardDef
} from './game-board';

describe('createGameBoard', () => {
  it('should create a GameBoard object from GameBoardDef', () => {
    const def = [[
      BoardSpaceType.GROUND,
      BoardSpaceType.TEMPLE
    ], [
      BoardSpaceType.WATER,
      BoardSpaceType.GROUND
    ]];
    const board = createGameBoard(def);
    const expected = def.map(
      (row) => row.map(
        (type) => jasmine.objectContaining({type}),
      )
    );
    expect(board).toEqual(expected);
  });

  it('should throw an error if GameBoardDef is invalid', () => {
    const def = [[
      BoardSpaceType.TEMPLE
    ], [
      BoardSpaceType.WATER,
      BoardSpaceType.GROUND
    ]];

    expect(() => createGameBoard(def)).toThrowError();
  });
});

describe('validateGameBoardDef', () => {
  it('should return undefined if GameBoardDef is valid', () => {
    const def = [[
      BoardSpaceType.GROUND
    ], [
      BoardSpaceType.WATER
    ]];
    const result = validateGameBoardDef(def);
    expect(result).toBeUndefined();
  });

  it('should return error string if GameBoardDef is empty', () => {
    const def = [];
    const result = validateGameBoardDef(def);
    expect(result).toEqual('game-board.empty');
  });

  it('should return error string if first GameBoardDef row is empty', () => {
    const def = [[], [
      BoardSpaceType.WATER,
      BoardSpaceType.GROUND
    ]];

    const result = validateGameBoardDef(def);
    expect(result).toEqual('game-board.empty-row');
  });

  it('should return error string if GameBoardDef rows are not even', () => {
    const def = [[
      BoardSpaceType.TEMPLE
    ], [
      BoardSpaceType.WATER,
      BoardSpaceType.GROUND
    ]];

    const result = validateGameBoardDef(def);
    expect(result).toEqual('game-board.not-even');
  });
});
