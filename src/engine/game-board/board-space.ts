export enum BoardSpaceType {
  GROUND,
  WATER,
  TEMPLE
}

export class BoardSpace {
  type: BoardSpaceType;
}

export function createSpace(type: BoardSpaceType): BoardSpace {
  return {
    type
  };
}

export function spaceMatchesType(space: BoardSpace, type: BoardSpaceType): boolean {
  return space.type === type;
}
