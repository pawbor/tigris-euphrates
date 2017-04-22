import { browser, element, by } from 'protractor';

export class TigrisEuphratesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('te-root h1')).getText();
  }
}
