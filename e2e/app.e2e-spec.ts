import { AppTaskPage } from './app.po';

describe('app-task App', () => {
  let page: AppTaskPage;

  beforeEach(() => {
    page = new AppTaskPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
