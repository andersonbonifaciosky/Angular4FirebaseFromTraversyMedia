import { Fire2Page } from './app.po';

describe('fire2 App', () => {
  let page: Fire2Page;

  beforeEach(() => {
    page = new Fire2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
