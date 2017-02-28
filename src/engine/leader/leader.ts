export type LeaderRole = 'Farmer' | 'King' | 'Priest' | 'Trader';

export type Dynasty = 'Archer' | 'Bull' | 'Lion' | 'Pot';

export interface Leader {
  dynasty: Dynasty;
  role: LeaderRole;
}

export function createLeader(role: LeaderRole, dynasty: Dynasty): Leader {
  return {
    get dynasty() { return dynasty; },
    get role() { return role; }
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
  ]
};

export function createArcherLeaders(): Leader[] {
  return createLeaders('Archer');
}

export function createBullLeaders(): Leader[] {
  return createLeaders('Bull');
}

export function createLionLeaders(): Leader[] {
  return createLeaders('Lion');
}

export function createPotLeaders(): Leader[] {
  return createLeaders('Pot');
}

