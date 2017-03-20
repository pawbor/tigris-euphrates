import { createAllMonuments } from './monument';

describe('\n\nWHEN I create all monuments', () => {
  const monuments = createAllMonuments();

  it('\nTHEN 6 monuments are created', () => {
    expect(monuments.length).toEqual(6);
  });

  it('\nTHEN each monument has valid content type ', () => {
    monuments.forEach((monument) => {
      expect(monument.contentType).toContain('Monument');
      expect(monument.contentType).toContain(monument.topColor);
      expect(monument.contentType).toContain(monument.baseColor);
    });
  });

  it('\nTHEN Black/Blue monument is created', () => {
    const expected = jasmine.objectContaining({ baseColor: 'Black', topColor: 'Blue' });
    expect(monuments).toContain(expected);
  });

  it('\nTHEN Black/Green monument is created', () => {
    const expected = jasmine.objectContaining({ baseColor: 'Black', topColor: 'Green' });
    expect(monuments).toContain(expected);
  });

  it('\nTHEN Black/Red monument is created', () => {
    const expected = jasmine.objectContaining({ baseColor: 'Black', topColor: 'Red' });
    expect(monuments).toContain(expected);
  });

  it('\nTHEN Blue/Green monument is created', () => {
    const expected = jasmine.objectContaining({ baseColor: 'Blue', topColor: 'Green' });
    expect(monuments).toContain(expected);
  });

  it('\nTHEN Green/Red monument is created', () => {
    const expected = jasmine.objectContaining({ baseColor: 'Green', topColor: 'Red' });
    expect(monuments).toContain(expected);
  });

  it('\nTHEN Red/Blue monument is created', () => {
    const expected = jasmine.objectContaining({ baseColor: 'Red', topColor: 'Blue' });
    expect(monuments).toContain(expected);
  });
});
