
import { BasePage } from "./BasePage";
export class ActiveAssignment {
  private readonly QUITTUTOTIAL ='~Quit tutorial';
  async clickQuitTutorial(timeout = 10000) {
    const basePage = new BasePage();
    const quickTutorial = await $(this.QUITTUTOTIAL);
    await basePage.waitForReady(this.QUITTUTOTIAL, timeout);
    await quickTutorial.click();
  }
}
