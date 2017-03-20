import { initBoardRow } from './game-board-row';
import { BoardRowDef } from './game-board-def';

describe('\n\nGIVEN a valid board row definition', () => {
  const def: BoardRowDef = ['Water', 'Ground', 'Temple'];

  describe('\nWHEN I initialize board row', () => {
    const row = initBoardRow(def);

    it('\nTHEN size matches definition', () => {
      expect(row.size).toEqual(def.length);
    });

    it('\nTHEN types of spaces matches definition', () => {
      def.forEach((spaceType, spaceNo) => {
        const space = row.getSpace(spaceNo);
        expect(space.type).toEqual(spaceType);
      });
    });

    it('\nTHEN Water spaces are empty', () => {
      const space = row.getSpace(0);
      expect(space.type).toEqual('Water');
      expect(space.isEmpty).toBeTruthy();
    });

    it('\nTHEN Ground spaces are empty', () => {
      const space = row.getSpace(1);
      expect(space.type).toEqual('Ground');
      expect(space.isEmpty).toBeTruthy();
    });

    describe('\nTHEN Temple spaces contain', () => {
      const space = row.getSpace(2);

      it('temple tile', () => {
        const temple = space.contains(['Temple']);
        expect(temple).toBeTruthy();
      });

      it('treasure token', () => {
        const treasure = space.contains(['TreasureToken']);
        expect(treasure).toBeTruthy();
      });
    });
  });
});
