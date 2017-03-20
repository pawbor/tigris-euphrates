import { createContentSlot } from './content-slot';

const slotType = 'TestSlot';
const content = [
  { contentType: ['Content1', 'Content3'] },
  { contentType: ['Content2', 'Content3'] },
  { contentType: ['Content1', 'Content2'] }
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
    const truthy = slot.contains(['Content1']);
    const falsy = slot.contains(['Content1', 'Content2', 'Content3']);

    it('\nTHEN I get true if it does', () => {
      expect(truthy).toBeTruthy();
    });

    it('\nTHEN I get false if it doesn\'t', () => {
      expect(falsy).toBeFalsy();
    });
  });

  describe('\nWHEN I try to retrive content by type', () => {
    const single = slot.getContent(content[0].contentType);
    const many = slot.getContent(['Content1']);
    const none = slot.getContent(['Content1', 'Content2', 'Content3']);

    it('\nTHEN I get all matching content', () => {
      expect(single.length).toBe(1);
      expect(single).toContain(content[0]);

      expect(many.length).toBe(2);
      expect(many).toContain(content[0]);
      expect(many).toContain(content[2]);

      expect(none.length).toBe(0);
    });
  });
});
