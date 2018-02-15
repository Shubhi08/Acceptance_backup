import { AppPage } from './app.po';

describe('crewleave App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
  it('should display CRewLeave Title', () => {
    page.navigateTo();
    expect(page.getappTitle()).toBeTruthy;
  });
  it('should open the calender', () => {
    page.navigateTo();
    expect(page.getappFromDate()).toBeTruthy;
  });
  it('should display Showquota Button', () => {
    page.navigateTo();
    expect(page.getshowquotaButton()).toBeTruthy;
  });
});
