import {
  BoardSpaceType,
  emptyBoardSpace
} from './board-space';

describe('emptyBoardSpace', () => {
  const types: BoardSpaceType[] = [
    'Ground',
    'Water',
    'Temple'
  ];

  it('should create BoardSpace object', () => {
    types.forEach((type) => {
      const space = emptyBoardSpace(type);
      const expected = jasmine.objectContaining({
        type,
        slot: jasmine.objectContaining({slotType: 'EmptySlot'})
      });
      expect(space).toEqual(expected);
    });
  });
});
