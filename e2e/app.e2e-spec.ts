import { MoviesappPage } from './app.po';

describe('moviesapp App', () => {
  let page: MoviesappPage;

  beforeEach(() => {
    page = new MoviesappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
