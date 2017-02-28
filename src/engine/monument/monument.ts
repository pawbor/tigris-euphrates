export type MonumentColor = 'Black' | 'Blue' | 'Green' | 'Red';

export interface Monument {
  baseColor: MonumentColor;
  topColor: MonumentColor;
};

export function createMonument(baseColor: MonumentColor, topColor: MonumentColor): Monument {
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
