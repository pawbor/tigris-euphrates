export enum BoardSpaceType {
  GROUND,
  WATER,
  TEMPLE
}

export interface BoardSpace {
  type: BoardSpaceType;
}

export function createBoardSpace(type: BoardSpaceType): BoardSpace {
  return {
    get type() { return type; }
  };
}
