import {
  BoardSpaceType,
  createSpace,
  spaceMatchesType
} from './board-space';

describe('createSpace', () => {
  it('should create BoardSpace object', () => {
    const space = createSpace(BoardSpaceType.GROUND);
    expect(space).toBeDefined();
  });

  describe('- created BoardSpace object', () => {
    const types = [
      BoardSpaceType.GROUND,
      BoardSpaceType.WATER,
      BoardSpaceType.TEMPLE
    ];

    it('should match defined type', () => {
      types.forEach((type) => {
        const space = createSpace(type);
        const match = spaceMatchesType(space, type);
        expect(match).toBeTruthy(`${space} not matching ${type}`);
      });
    });
  });
});

describe('spaceMatchesType', () => {
  const space = {type: BoardSpaceType.GROUND};
  const type = BoardSpaceType.GROUND;
  const otherType = BoardSpaceType.WATER;

  it('should return true when BoardSpace matches BoardSpaceType', () => {
    const result = spaceMatchesType(space, type);
    expect(result).toBeTruthy();
  });

  it('should return false when BoardSpace doesn\'t match BoardSpaceType', () => {
    const result = spaceMatchesType(space, otherType);
    expect(result).toBeFalsy();
  });
});
