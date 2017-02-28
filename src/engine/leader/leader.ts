export interface Leader {
  dynasty: string;
  role: string;
}

export function createLeader(role: string, dynasty: string): Leader {
  return {
    get dynasty() { return dynasty; },
    get role() { return role; }
  };
}

export function createFarmer(dynasty: string): Leader {
  return createLeader('Farmer', dynasty);
};

export function createKing(dynasty: string): Leader {
  return createLeader('King', dynasty);
};

export function createPriest(dynasty: string): Leader {
  return createLeader('Priest', dynasty);
};

export function createTrader(dynasty: string): Leader {
  return createLeader('Trader', dynasty);
};

export function createLeaders(dynasty: string): Leader[] {
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

