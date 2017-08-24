import { WdRebuildPage } from './app.po';

describe('wd-rebuild App', () => {
  let page: WdRebuildPage;

  beforeEach(() => {
    page = new WdRebuildPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});