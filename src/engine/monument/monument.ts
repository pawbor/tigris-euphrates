import {Color} from '../common';

export interface Monument {
  baseColor: Color;
  topColor: Color;
};

export function createMonument(baseColor: Color, topColor: Color): Monument {
  return {
    get baseColor() { return baseColor; },
    get topColor() { return topColor; }
  };
}

export function createAllMonuments(): Monument[] {
  return [
    createMonument('Black', 'Blue'),
    createMonument('Black', 'Green'),
    createMonument('Black', 'Red'),
    createMonument('Blue', 'Green'),
    createMonument('Green', 'Red'),
    createMonument('Red', 'Blue')
  ];
}
