import { createContentSlot } from './content-slot';

const slotType = 'TestSlot';
const content = [
  {contentType: 'Content1'},
  {contentType: 'Content1'},
  {contentType: 'Content2'}
];

describe('\n\nWHEN I create new content slot', () => {
  const slot = createContentSlot(slotType, content);

  it('\nTHEN the slot has valid type', () => {
    expect(slot.slotType).toBe(slotType);
  });

  it('\nTHEN the slot contains valid content', () => {
    expect(slot.content).toEqual(content);
  });
});

describe('\n\nGIVEN a content slot', () => {
  const slot = createContentSlot(slotType, content);

  describe('\nWHEN I check if it contains some type of content', () => {
    const truthy = slot.contains(content[0].contentType);
    const falsy = slot.contains('OtherContent');

    it('\nTHEN I get true if it does', () => {
      expect(truthy).toBeTruthy();
    });

    it('\nTHEN I get false if it doesn\'t', () => {
      expect(falsy).toBeFalsy();
    });
  });

  describe('\nWHEN I try to retrive content by type', () => {
    const retrived1 = slot.getContent('Content1');
    const retrived2 = slot.getContent('Content2');
    const retrivedOther = slot.getContent('OtherContent');

    it('\nTHEN I get all matching content', () => {
      expect(retrived1.length).toBe(2);
      expect(retrived2.length).toBe(1);
      expect(retrivedOther.length).toBe(0);
    });
  });
});
