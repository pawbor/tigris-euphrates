import {
  BoardSpaces,
  BoardSpacesDef,
  createBoardSpaces,
  spacesMatchesDefinition
} from './board-spaces';

export class GameBoardDef {
  spaces: BoardSpacesDef;
}

export class GameBoard {
  spaces: BoardSpaces;
}

export function createGameBoard(definition: GameBoardDef): GameBoard {
  const spaces = createBoardSpaces(definition.spaces);
  return {
    get spaces() { return spaces; }
  };
}

export function boardMatchesDefinition(board: GameBoard, definition: GameBoardDef): boolean {
  return spacesMatchesDefinition(board.spaces, definition.spaces);
}
