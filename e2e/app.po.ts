import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
  getappTitle(){
    return element(by.name('CREW LEAVE'));
  }

  getappFromDate(){
    return element(by.className('col-xs-5 col-sm-5 col-md-5 col-lg-5 form-group'));
  }

  getshowquotaButton(){
    return element (by.buttonText('Show Quota'));
  }
}
