import {
  BoardRow,
  BoardRowDef,
  createBoardRow,
  rowMatchesDefinition
} from './board-row';

export type BoardSpacesDef = BoardRowDef[];

export type BoardSpaces = BoardRow[];

export function createBoardSpaces(spacesDef: BoardSpacesDef): BoardSpaces {
  return spacesDef.map(createBoardRow);
}

export function spacesMatchesDefinition(spaces: BoardSpaces, spacesDef: BoardSpacesDef): boolean {
  return spaces.length === spacesDef.length
    && spaces.every(
        (row, ii) => rowMatchesDefinition(row, spacesDef[ii])
    );
}
