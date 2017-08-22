import { AngularMaterialComponentsPage } from './app.po';

describe('angular-material-components App', () => {
  let page: AngularMaterialComponentsPage;

  beforeEach(() => {
    page = new AngularMaterialComponentsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
