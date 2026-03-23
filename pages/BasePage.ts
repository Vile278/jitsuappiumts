export class BasePage {
  async pause(ms = 1000) {
    await driver.pause(ms);
  }
  async waitForReady(locator: string, timeout = 10000) {
    const profile = await $(locator);
    await profile.waitForDisplayed({ timeout });
    await profile.waitForEnabled({ timeout });
  }
}