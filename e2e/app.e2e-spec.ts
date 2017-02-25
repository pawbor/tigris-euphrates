import { TigrisEuphratesPage } from './app.po';

describe('tigris-euphrates App', function() {
  let page: TigrisEuphratesPage;

  beforeEach(() => {
    page = new TigrisEuphratesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
