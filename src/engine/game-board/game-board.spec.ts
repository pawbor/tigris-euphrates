import {
  BoardSpaceType,
} from './board-space';

import {
  GameBoardDef,
  createGameBoard,
  validateGameBoardDef
} from './game-board';

describe('createGameBoard', () => {
  it('should create a GameBoard object from GameBoardDef', () => {
    const def: GameBoardDef = [
      ['Ground', 'Temple'],
      ['Water', 'Ground']
    ];
    const board = createGameBoard(def);
    const expected = def.map(
      (row) => row.map(
        (type) => jasmine.objectContaining({type}),
      )
    );
    expect(board).toEqual(expected);
  });

  it('should throw an error if GameBoardDef is invalid', () => {
    const def: GameBoardDef = [
      ['Temple'],
      ['Water', 'Ground']
    ];

    expect(() => createGameBoard(def)).toThrowError();
  });
});

describe('validateGameBoardDef', () => {
  it('should return undefined if GameBoardDef is valid', () => {
    const def: GameBoardDef = [
      ['Ground'],
      ['Water']
    ];
    const result = validateGameBoardDef(def);
    expect(result).toBeUndefined();
  });

  it('should return error string if GameBoardDef is empty', () => {
    const def: GameBoardDef = [];
    const result = validateGameBoardDef(def);
    expect(result).toEqual('game-board.empty');
  });

  it('should return error string if first GameBoardDef row is empty', () => {
    const def: GameBoardDef = [
      [],
      ['Water', 'Ground']
    ];

    const result = validateGameBoardDef(def);
    expect(result).toEqual('game-board.empty-row');
  });

  it('should return error string if GameBoardDef rows are not even', () => {
    const def: GameBoardDef = [
      ['Temple'],
      ['Water', 'Ground']
    ];

    const result = validateGameBoardDef(def);
    expect(result).toEqual('game-board.not-even');
  });
});
