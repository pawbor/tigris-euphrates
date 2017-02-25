import {
  createBoardRow,
  rowMatchesDefinition
} from './board-row';

import {
  BoardSpaceType
} from './board-space';

describe('createBoardRow', () => {
  it('should create BoardRow object', () => {
    const space = createBoardRow([BoardSpaceType.GROUND]);
    expect(space).toBeDefined();
  });

  describe('- created BoardRow object', () => {
    const def = [
      BoardSpaceType.GROUND,
      BoardSpaceType.WATER,
      BoardSpaceType.TEMPLE
    ];

    it('should match BoardRowDef object', () => {
      const row = createBoardRow(def);
      const match = rowMatchesDefinition(row, def);
      expect(match).toBeTruthy(`${row} not matching ${def}`);
    });
  });
});

describe('rowMatchesDefinition', () => {
  const row = [{type: BoardSpaceType.GROUND}];
  const def = [BoardSpaceType.GROUND];
  const otherDef = [BoardSpaceType.WATER];

  it('should return true when BoardRow match BoardRowDef', () => {
    const result = rowMatchesDefinition(row, def);
    expect(result).toBeTruthy();
  });

  it('should return false when BoardRow doesn\'t match BoardRowDef', () => {
    const result = rowMatchesDefinition(row, otherDef);
    expect(result).toBeFalsy();
  });
});
