import { Dynasty } from 'engine/common';
import { Content } from 'engine/content-slot';

export type LeaderRole = 'Farmer' | 'King' | 'Priest' | 'Trader';

export interface Leader extends Content {
  contentType: 'Leader';
  dynasty: Dynasty;
  role: LeaderRole;
}

export function createLeader(role: LeaderRole, dynasty: Dynasty): Leader {
  return {
    get contentType(): 'Leader' { return 'Leader'; },
    get dynasty(): Dynasty { return dynasty; },
    get role(): LeaderRole { return role; }
  };
}

export function createFarmer(dynasty: Dynasty): Leader {
  return createLeader('Farmer', dynasty);
};

export function createKing(dynasty: Dynasty): Leader {
  return createLeader('King', dynasty);
};

export function createPriest(dynasty: Dynasty): Leader {
  return createLeader('Priest', dynasty);
};

export function createTrader(dynasty: Dynasty): Leader {
  return createLeader('Trader', dynasty);
};

export function createLeaders(dynasty: Dynasty): Leader[] {
  return [
    createKing(dynasty),
    createPriest(dynasty),
    createFarmer(dynasty),
    createTrader(dynasty),
  ];
};
