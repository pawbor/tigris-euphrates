import { BoardSpace } from './board-space';
import { BoardRow, initBoardRow } from './game-board-row';
import { GameBoardDef, validateGameBoardDef } from './game-board-def';

export interface GameBoard {
  rows: number;
  cols: number;
  getSpace(row: number, column: number): BoardSpace;
}

export function initGameBoard(boardDef: GameBoardDef): GameBoard {
  const error = validateGameBoardDef(boardDef);
  if (error) {
    throw new Error(error);
  }

  const rows = boardDef.map(initBoardRow);
  return createGameBoard(rows);
}

function createGameBoard(rows: BoardRow[]): GameBoard {
  return Object.freeze({
    get rows(): number {
      return rows.length;
    },
    get cols(): number {
      return rows[0].size;
    },
    getSpace(row: number, column: number): BoardSpace {
      return rows[row].getSpace(column);
    }
  });
}
