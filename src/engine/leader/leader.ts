import { Dynasty } from 'engine/common';
import { Content } from 'engine/content-slot';

export type LeaderRole = 'Farmer' | 'King' | 'Priest' | 'Trader';

export interface Leader extends Content {
  dynasty: Dynasty;
  role: LeaderRole;
}

export function createLeaders(dynasty: Dynasty): Leader[] {
  return [
    createLeader('King', dynasty),
    createLeader('Priest', dynasty),
    createLeader('Farmer', dynasty),
    createLeader('Trader', dynasty),
  ];
};

function createLeader(role: LeaderRole, dynasty: Dynasty): Leader {
  return Object.freeze({
    contentType: ['Leader', dynasty, role],
    dynasty,
    role
  });
}
