export type GameBoardDef = BoardRowDef[];

export type BoardRowDef = BoardSpaceType[];

export type BoardSpaceType = 'Ground' | 'Water' | 'Temple';

export const Errors = {
 empty: 'game-board-def.empty',
 emptyRow: 'game-board-def.empty-row',
 invalidRowSize: 'game-board-def.invalid-row-size',
};

export function validateGameBoardDef(boardDef: GameBoardDef): string {
  const empty = !boardDef.length;
  if (empty) {
    return Errors.empty;
  }

  const rowSize = boardDef[0].length;
  const emptyRow = !rowSize;
  if (emptyRow) {
    return Errors.emptyRow;
  }

  const invalidRowSize = boardDef.slice(1).some(
    (row) => row.length !== rowSize
  );
  if (invalidRowSize) {
    return Errors.invalidRowSize;
  }
}
