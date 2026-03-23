import { expect } from 'chai';
import { clearAppData } from '../../utils/device';

const APP_PACKAGE = 'com.axlehire.drive.staging';
const UDID = 'emulator-5554';

describe('Jitsu App - Login Test', () => {

  const USERNAME_XPATH = '(//android.widget.EditText)[1]';
  const PASSWORD_XPATH = '(//android.widget.EditText)[2]';
  const ALLOW_XPATH = '//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_button"]';
  const LOGIN_BTN_XPATH = '//android.widget.Button[@content-desc="Log In"]';


  const username = 'auto_244332';
  const password = 'Testing1!';

  it('Login with valid account', async () => {
    // 1) Open app
    await driver.activateApp(APP_PACKAGE);
    await driver.pause(2000);

    const allowBtn = await $(ALLOW_XPATH);

    // 2) Click Allow on the notification message box
    try {
      await allowBtn.waitForDisplayed({ timeout: 10000 });
      await allowBtn.click(); 
    } catch {
      console.log('No permission popup - skip');
    }

    // 3) Find elements
    const usernameInput = await $(USERNAME_XPATH);
    const passwordInput = await $(PASSWORD_XPATH);
    const loginBtn = await $(LOGIN_BTN_XPATH);
    

    // 4) Wait until screen ready
    await usernameInput.waitForDisplayed({ timeout: 20000 });
    await passwordInput.waitForDisplayed({ timeout: 20000 });
    await loginBtn.waitForDisplayed({ timeout: 20000 });

    // 5) Input username/password
    await usernameInput.click();
    await usernameInput.setValue(username);

    await passwordInput.click();
    await passwordInput.setValue(password);

    // 6) Click login
    await loginBtn.click();

  });
   after(async () => {
    // clear data/cache để lần sau luôn ra login
    await clearAppData(APP_PACKAGE, UDID);
    // đóng app
    const result = await driver.terminateApp(APP_PACKAGE);
    // console.log('Terminate result:', result);
    // expect(result).to.equal(true);
    
  });

});
