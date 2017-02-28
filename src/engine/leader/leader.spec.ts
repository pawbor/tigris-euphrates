import {
  createLeader,
  createFarmer,
  createKing,
  createPriest,
  createTrader,
  createLeaders,
  createArcherLeaders,
  createBullLeaders,
  createLionLeaders,
  createPotLeaders
} from './leader';

describe('createLeader', () => {
  it('should create a leader with role and dynasty', () => {
    const role = 'r';
    const dynasty = 'd';
    const leader = createLeader(role, dynasty);
    const expected = jasmine.objectContaining({role, dynasty});
    expect(leader).toEqual(expected);
  });
});

describe('createFarmer', () => {
  it('should create a Farmer leader', () => {
    const dynasty = 'd';
    const leader = createFarmer(dynasty);
    const expected = jasmine.objectContaining({role: 'Farmer', dynasty});
    expect(leader).toEqual(expected);
  });
});

describe('createKing', () => {
  it('should create a King leader', () => {
    const dynasty = 'd';
    const leader = createKing(dynasty);
    const expected = jasmine.objectContaining({role: 'King', dynasty});
    expect(leader).toEqual(expected);
  });
});

describe('createPriest', () => {
  it('should create a Priest leader', () => {
    const dynasty = 'd';
    const leader = createPriest(dynasty);
    const expected = jasmine.objectContaining({role: 'Priest', dynasty});
    expect(leader).toEqual(expected);
  });
});

describe('createTrader', () => {
  it('should create a Trader leader', () => {
    const dynasty = 'd';
    const leader = createTrader(dynasty);
    const expected = jasmine.objectContaining({role: 'Trader', dynasty});
    expect(leader).toEqual(expected);
  });
});

describe('createLeaders', () => {
  it('should create an array of all dynasty leaders', () => {
    const dynasty = 'd';
    const leaders = createLeaders(dynasty);
    const expected = jasmine.arrayContaining([
      jasmine.objectContaining({role: 'Farmer', dynasty}),
      jasmine.objectContaining({role: 'King', dynasty}),
      jasmine.objectContaining({role: 'Priest', dynasty}),
      jasmine.objectContaining({role: 'Trader', dynasty})
    ]);
    expect(leaders).toEqual(expected);
  });
});

describe('createLeaders', () => {
  it('should create an array of all dynasty leaders', () => {
    const dynasty = 'd';
    const leaders = createLeaders(dynasty);
    const expected = jasmine.arrayContaining([
      jasmine.objectContaining({role: 'Farmer', dynasty}),
      jasmine.objectContaining({role: 'King', dynasty}),
      jasmine.objectContaining({role: 'Priest', dynasty}),
      jasmine.objectContaining({role: 'Trader', dynasty})
    ]);
    expect(leaders).toEqual(expected);
  });
});

describe('createArcherLeaders', () => {
  it('should create an array of all dynasty Archer', () => {
    const leaders = createArcherLeaders();
    const expected = jasmine.arrayContaining([
      jasmine.objectContaining({role: 'Farmer', dynasty: 'Archer'}),
      jasmine.objectContaining({role: 'King', dynasty: 'Archer'}),
      jasmine.objectContaining({role: 'Priest', dynasty: 'Archer'}),
      jasmine.objectContaining({role: 'Trader', dynasty: 'Archer'})
    ]);
    expect(leaders).toEqual(expected);
  });
});

describe('createBullLeaders', () => {
  it('should create an array of all Bull leaders', () => {
    const leaders = createBullLeaders();
    const expected = jasmine.arrayContaining([
      jasmine.objectContaining({role: 'Farmer', dynasty: 'Bull'}),
      jasmine.objectContaining({role: 'King', dynasty: 'Bull'}),
      jasmine.objectContaining({role: 'Priest', dynasty: 'Bull'}),
      jasmine.objectContaining({role: 'Trader', dynasty: 'Bull'})
    ]);
    expect(leaders).toEqual(expected);
  });
});

describe('createLionLeaders', () => {
  it('should create an array of all Lion leaders', () => {
    const leaders = createLionLeaders();
    const expected = jasmine.arrayContaining([
      jasmine.objectContaining({role: 'Farmer', dynasty: 'Lion'}),
      jasmine.objectContaining({role: 'King', dynasty: 'Lion'}),
      jasmine.objectContaining({role: 'Priest', dynasty: 'Lion'}),
      jasmine.objectContaining({role: 'Trader', dynasty: 'Lion'})
    ]);
    expect(leaders).toEqual(expected);
  });
});

describe('createPotLeaders', () => {
  it('should create an array of all Pot leaders', () => {
    const leaders = createPotLeaders();
    const expected = jasmine.arrayContaining([
      jasmine.objectContaining({role: 'Farmer', dynasty: 'Pot'}),
      jasmine.objectContaining({role: 'King', dynasty: 'Pot'}),
      jasmine.objectContaining({role: 'Priest', dynasty: 'Pot'}),
      jasmine.objectContaining({role: 'Trader', dynasty: 'Pot'})
    ]);
    expect(leaders).toEqual(expected);
  });
});
