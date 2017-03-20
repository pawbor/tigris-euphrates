import { initBoardSpace } from './board-space';

describe('\n\nWHEN I initialize Ground board space', () => {
  const space = initBoardSpace('Ground');

  it('\nTHEN space has valid space type', () => {
    expect(space.type).toEqual('Ground');
  });

  it('\nTHEN space is empty', () => {
    expect(space.isEmpty).toBeTruthy();
  });
});

describe('\n\nWHEN I initialize Water board space', () => {
  const space = initBoardSpace('Water');

  it('\nTHEN space have valid space type', () => {
    expect(space.type).toEqual('Water');
  });

  it('\nTHEN space is empty', () => {
    expect(space.isEmpty).toBeTruthy();
  });
});

describe('\n\nWHEN I initialize Temple board space', () => {
  const space = initBoardSpace('Temple');

  it('\nTHEN space have valid space type', () => {
    expect(space.type).toEqual('Temple');
  });

  it('\nTHEN space contain Temple tile', () => {
    const temple = space.contains(['Temple']);
    expect(temple).toBeTruthy;
  });

  it('\nTHEN space contain treasure token', () => {
    const contains = space.contains(['TreasureToken']);
    expect(contains).toBeTruthy();
  });
});


describe('\n\nGIVEN a non-empty board space', () => {
  const slot = initBoardSpace('Temple');

  describe('\nWHEN I check if it contains some type of content', () => {
    const truthy = slot.contains(['Temple']);
    const falsy = slot.contains(['Farm']);

    it('\nTHEN I get true if it does', () => {
      expect(truthy).toBeTruthy();
    });

    it('\nTHEN I get false if it doesn\'t', () => {
      expect(falsy).toBeFalsy();
    });
  });

  describe('\nWHEN I retrive content by type', () => {
    const temples = slot.getContent(['Temple']);

    it('\nTHEN I get all matching content', () => {
      expect(temples.length).toBe(1);
    });
  });
});
