import {
  BoardSpace,
  BoardSpaceType,
  createBoardSpace
} from './board-space';

export type GameBoardDef = BoardRowDef[];

export type BoardRowDef = BoardSpaceType[];

export type GameBoard = BoardRow[];

export type BoardRow = BoardSpace[];

export function createGameBoard(boardDef: GameBoardDef): GameBoard {
  const error = validateGameBoardDef(boardDef);
  if (error) {
    throw new Error(error);
  }

  return boardDef.map(
    (rowDef) => rowDef.map(
      (type) => createBoardSpace(type)
    )
  );
}

export function validateGameBoardDef(boardDef: GameBoardDef): string {
  const empty = !boardDef.length;
  if (empty) {
    return 'game-board.empty';
  }

  const rowSize = boardDef[0].length;
  const emptyRow = !rowSize;
  if (emptyRow) {
    return 'game-board.empty-row';
  }

  const notEven = boardDef.slice(1).some(
    (row) => row.length !== rowSize
  );
  if (notEven) {
    return 'game-board.not-even';
  }
}
