import { BoardSpace, initBoardSpace } from './board-space';
import { BoardRowDef } from './game-board-def';

export interface BoardRow {
  size: number;
  getSpace(column: number): BoardSpace;
}

export function initBoardRow(rowDef: BoardRowDef) {
  const spaces = rowDef.map(
    (type) => initBoardSpace(type)
  );
  return createBoardRow(spaces);
}

function createBoardRow(spaces: BoardSpace[]): BoardRow {
  return {
    get size(): number {
      return spaces.length;
    },
    getSpace(column: number): BoardSpace {
      return spaces[column];
    }
  };
}
