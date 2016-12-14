import { Ng2WpPage } from './app.po';

describe('ng2-wp App', function() {
  let page: Ng2WpPage;

  beforeEach(() => {
    page = new Ng2WpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
