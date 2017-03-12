import { createAllMonuments } from './monument';

describe('\n\nWHEN I create all monuments', () => {
  const monuments = createAllMonuments();

  it('\nTHEN 6 monuments should be created', () => {
    expect(monuments.length).toEqual(6);
  });

  it('\nTHEN Black/Blue monument should be created', () => {
    const expected = jasmine.objectContaining({ baseColor: 'Black', topColor: 'Blue' });
    expect(monuments).toContain(expected);
  });

  it('\nTHEN Black/Green monument should be created', () => {
    const expected = jasmine.objectContaining({ baseColor: 'Black', topColor: 'Green' });
    expect(monuments).toContain(expected);
  });

  it('\nTHEN Black/Red monument should be created', () => {
    const expected = jasmine.objectContaining({ baseColor: 'Black', topColor: 'Red' });
    expect(monuments).toContain(expected);
  });

  it('\nTHEN Blue/Green monument should be created', () => {
    const expected = jasmine.objectContaining({ baseColor: 'Blue', topColor: 'Green' });
    expect(monuments).toContain(expected);
  });

  it('\nTHEN Green/Red monument should be created', () => {
    const expected = jasmine.objectContaining({ baseColor: 'Green', topColor: 'Red' });
    expect(monuments).toContain(expected);
  });

  it('\nTHEN Red/Blue monument should be created', () => {
    const expected = jasmine.objectContaining({ baseColor: 'Red', topColor: 'Blue' });
    expect(monuments).toContain(expected);
  });
});
