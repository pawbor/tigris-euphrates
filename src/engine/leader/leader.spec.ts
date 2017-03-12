import {
  createLeader,
  createFarmer,
  createKing,
  createPriest,
  createTrader,
  createLeaders
} from './leader';

describe('createLeader', () => {
  it('should create a leader with role and dynasty', () => {
    const role = 'King';
    const dynasty = 'Archer';
    const leader = createLeader(role, dynasty);
    const expected = jasmine.objectContaining({role, dynasty});
    expect(leader).toEqual(expected);
  });
});

describe('createFarmer', () => {
  it('should create a Farmer leader', () => {
    const dynasty = 'Archer';
    const leader = createFarmer(dynasty);
    const expected = jasmine.objectContaining({role: 'Farmer', dynasty});
    expect(leader).toEqual(expected);
  });
});

describe('createKing', () => {
  it('should create a King leader', () => {
    const dynasty = 'Archer';
    const leader = createKing(dynasty);
    const expected = jasmine.objectContaining({role: 'King', dynasty});
    expect(leader).toEqual(expected);
  });
});

describe('createPriest', () => {
  it('should create a Priest leader', () => {
    const dynasty = 'Archer';
    const leader = createPriest(dynasty);
    const expected = jasmine.objectContaining({role: 'Priest', dynasty});
    expect(leader).toEqual(expected);
  });
});

describe('createTrader', () => {
  it('should create a Trader leader', () => {
    const dynasty = 'Archer';
    const leader = createTrader(dynasty);
    const expected = jasmine.objectContaining({role: 'Trader', dynasty});
    expect(leader).toEqual(expected);
  });
});

describe('createLeaders', () => {
  it('should create an array of all dynasty leaders', () => {
    const dynasty = 'Archer';
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
    const dynasty = 'Archer';
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
