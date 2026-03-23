import { BasePage } from "./BasePage";
export class Menu {
  // private readonly PROFILE ='~Profile\nTab 5 of 5';
  // private readonly ROUTES ='~Routes\nTab 1 of 5';
  
  // The thỉd approach using getters
  get PROFILE() {
    return '~Profile\nTab 5 of 5';
  } 
  get ROUTES() {
    return '~Routes\nTab 1 of 5';
  }

  async clickProfile(timeout = 10000) {
    const basePage = new BasePage();
    const profile = await $(this.PROFILE);
    await basePage.waitForReady(this.PROFILE, timeout);
    await profile.click();
  }
  async clickRoutes(timeout = 10000) {
    const basePage = new BasePage();
    const route = await $(this.ROUTES);
    await basePage.waitForReady(this.ROUTES, timeout);
    await route.click();
  }

}  