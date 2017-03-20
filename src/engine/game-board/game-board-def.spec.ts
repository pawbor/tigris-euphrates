import { GameBoardDef, validateGameBoardDef, Errors } from './game-board-def';

describe('\n\nGIVEN a valid game board definition', () => {
  const def: GameBoardDef = [
    ['Ground'],
    ['Water']
  ];

  describe('\nWHEN I check its validity', () => {
    const result = validateGameBoardDef(def);

    it('\nTHEN no error messages are returned', () => {
      expect(result).toBeUndefined();
    });
  });
});

describe('\n\nGIVEN an empty game board definition', () => {
  const def: GameBoardDef = [];

  describe('\nWHEN I check its validity', () => {
    const result = validateGameBoardDef(def);

    it('\nTHEN I get error message', () => {
      expect(result).toEqual(Errors.empty);
    });
  });
});

describe('\n\nGIVEN a game board definition with empty first row', () => {
  const def: GameBoardDef = [
    [], []
  ];

  describe('\nWHEN I check its validity', () => {
    const result = validateGameBoardDef(def);

    it('\nTHEN I get error message', () => {
      expect(result).toEqual(Errors.emptyRow);
    });
  });
});

describe('\n\nGIVEN a game board definition with rows of different lengths', () => {
  const def: GameBoardDef = [
    ['Temple'],
    ['Water', 'Ground']
  ];

  describe('\nWHEN I check its validity', () => {
    const result = validateGameBoardDef(def);

    it('\nTHEN I get error message', () => {
      expect(result).toEqual(Errors.invalidRowSize);
    });
  });
});
