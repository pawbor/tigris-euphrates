import {
  createBoardSpaces,
  spacesMatchesDefinition
} from './board-spaces';

import {
  BoardSpaceType
} from './board-space';

describe('createBoardSpaces', () => {
  it('should create BoardSpaces object', () => {
    const space = createBoardSpaces([[BoardSpaceType.GROUND]]);
    expect(space).toBeDefined();
  });

  describe('- created BoardSpaces object', () => {
    const def = [[
      BoardSpaceType.GROUND,
      BoardSpaceType.WATER,
      BoardSpaceType.TEMPLE
    ]];

    it('should match BoardSpacesDef object', () => {
      const spaces = createBoardSpaces(def);
      const match = spacesMatchesDefinition(spaces, def);
      expect(match).toBeTruthy(`${spaces} not matching ${def}`);
    });
  });
});

describe('spacesMatchesDefinition', () => {
  const spaces = [[{type: BoardSpaceType.GROUND}]];
  const def = [[BoardSpaceType.GROUND]];
  const otherDef = [[BoardSpaceType.WATER]];

  it('should return true when BoardSpaces match BoardSpacesDef', () => {
    const result = spacesMatchesDefinition(spaces, def);
    expect(result).toBeTruthy();
  });

  it('should return false when BoardSpaces doesn\'t match BoardSpacesDef', () => {
    const result = spacesMatchesDefinition(spaces, otherDef);
    expect(result).toBeFalsy();
  });
});
