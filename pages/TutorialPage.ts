import { BasePage } from "./BasePage";
export class TutorialPage {

    // the first approach using private
    // private readonly ROUTES ='~Routes\nTab 1 of 5';
    // private readonly backButton = 'android.widget.Button';

    // The third approach using getters
    get ROUTES() {
        return '~Routes\nTab 1 of 5';
    }
    get backButton() {
        return 'android.widget.Button';
    }

    async clickBackButton(timeout = 10000) {
        const basePage = new BasePage();
        await basePage.waitForReady(this.backButton, timeout);
        const backBtn = await $(this.backButton);
        await backBtn.click();
    }

    private get tutorialText() {
        return $('//android.view.View[contains(@content-desc,"Tutorial: Driving with Jitsu")]');
    }

    private get startButton()
    {
        return $('~Start Tutorial');
    }

    async verifyDisplayed() {
        await this.tutorialText.waitForDisplayed({timeout: 10000, timeoutMsg: 'Tutorial screen did not appear'});
        await expect(this.tutorialText).toBeDisplayed();
    }

    async startTutorial() {
        await this.startButton.click();
    }
}