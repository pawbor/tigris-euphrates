import {
  BoardSpaceType,
  createBoardSpace
} from './board-space';

describe('createBoardSpace', () => {
  const types = [
    BoardSpaceType.GROUND,
    BoardSpaceType.WATER,
    BoardSpaceType.TEMPLE
  ];

  it('should create BoardSpace object', () => {
    types.forEach((type) => {
      const space = createBoardSpace(type);
      const expected = jasmine.objectContaining({type});
      expect(space).toEqual(expected);
    });
  });
});
