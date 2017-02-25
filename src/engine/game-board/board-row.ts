import {
  BoardSpace,
  BoardSpaceType,
  createSpace,
  spaceMatchesType
} from './board-space';

export type BoardSpacesDef = BoardRowDef[];

export type BoardRowDef = BoardSpaceType[];

export type BoardRow = BoardSpace[];

export function createBoardRow(rowDef: BoardRowDef) {
  return rowDef.map(createSpace);
}

export function rowMatchesDefinition(row: BoardRow, rowDef: BoardRowDef): boolean {
  return row.length === rowDef.length
    && row.every(
        (space, ii) => spaceMatchesType(space, rowDef[ii])
    );
}
