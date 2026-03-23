export class MyPerformance {
  //private readonly TUTORIALS ='~Tutorials';

  // The third approach using getters
  get TUTORIALS() {
    return '~Tutorials';
  } 

  async waitForReady(timeout = 10000) {
    const tutorial = await $(this.TUTORIALS);
    await tutorial.waitForDisplayed({ timeout });
  }

  /**
   * Click on tutorials (Tutorials)
   */
  async clickTutorial(timeout = 10000) {
    const tutorial = await $(this.TUTORIALS);
    // await profile.waitForDisplayed({ timeout });
    await tutorial.waitForEnabled({ timeout});
    // console.log("The profile button is enabled");
    await tutorial.click();
  }
}