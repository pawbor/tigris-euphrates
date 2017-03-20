import { initGameBoard } from './game-board';
import { GameBoardDef } from './game-board-def';

describe('\n\nGIVEN a valid game board definition', () => {
  const def: GameBoardDef = [
    ['Water', 'Temple', 'Ground'],
    ['Temple', 'Ground', 'Water']
  ];

  describe('\nWHEN I initialize game board', () => {
    const board = initGameBoard(def);

    it('\nTHEN number of rows matches definition', () => {
      expect(board.rows).toEqual(2);
    });

    it('\nTHEN number of spaces in a row matches definition', () => {
      expect(board.cols).toEqual(3);
    });

    it('\nTHEN types of spaces matches definition', () => {
      def.forEach((row, rowNo) => {
        row.forEach((spaceType, colNo) => {
          const space = board.getSpace(rowNo, colNo);
          expect(space.type).toEqual(spaceType);
        });
      });
    });

    it('\nTHEN Water spaces are empty', () => {
      const space = board.getSpace(0, 0);
      expect(space.type).toEqual('Water');
      expect(space.isEmpty).toBeTruthy();
    });

    it('\nTHEN Ground spaces are empty', () => {
      const space = board.getSpace(1, 1);
      expect(space.type).toEqual('Ground');
      expect(space.isEmpty).toBeTruthy();
    });

    describe('\nTHEN Temple spaces contain', () => {
      const space = board.getSpace(1, 0);

      it('temple tile', () => {
        const temple = space.contains(['Temple']);
        expect(space.type).toEqual('Temple');
        expect(temple).toBeTruthy();
      });

      it('treasure token', () => {
        const treasure = space.contains(['TreasureToken']);
        expect(space.type).toEqual('Temple');
        expect(treasure).toBeTruthy();
      });
    });
  });
});

describe('\n\nGIVEN an invalid game board definition', () => {
  const def: GameBoardDef = [
    ['Temple'],
    ['Water', 'Ground']
  ];

  describe('\nWHEN I try to initialize game board', () => {
    const tryFn = () => initGameBoard(def);

    it('\nTHEN error is thrown', () => {
      expect(tryFn).toThrowError();
    });
  });
});
