import { EmptySlot, createEmptySlot } from './empty-slot';

describe('createEmptySlot', () => {
  it('should create EmptySlot', () => {
    const space = createEmptySlot();
    const expected = jasmine.objectContaining({
      type: 'Empty'
    });
    expect(space).toEqual(expected);
  });
});
