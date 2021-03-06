import { Color } from 'engine/common';
import { Content } from 'engine/content-slot';

export interface Monument extends Content {
  baseColor: Color;
  topColor: Color;
};

function createMonument(baseColor: Color, topColor: Color): Monument {
  return Object.freeze({
    contentType: ['Monument', baseColor, topColor],
    baseColor,
    topColor
  });
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
