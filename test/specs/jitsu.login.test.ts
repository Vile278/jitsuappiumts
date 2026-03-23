import { expect } from 'chai';

describe('Jitsu App - Login Test', () => {
  // const USERNAME_XPATH =
  //   '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.EditText[1]';

  // const PASSWORD_XPATH =
  //   '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.EditText[2]';

  const USERNAME_XPATH = '(//android.widget.EditText)[1]';
  const PASSWORD_XPATH = '(//android.widget.EditText)[2]';
  const LOGIN_BTN_XPATH = '//android.widget.Button[@content-desc="Log In"]';

  const username = 'auto_244332';
  const password = 'Testing1!';

  it('Login with valid account', async () => {
    // 1) Open app
    await driver.activateApp('com.axlehire.drive.staging');
    await driver.pause(2000);

    // 2) Find elements
    const usernameInput = await $(USERNAME_XPATH);
    const passwordInput = await $(PASSWORD_XPATH);
    const loginBtn = await $(LOGIN_BTN_XPATH);

    // 3) Wait until screen ready
    await usernameInput.waitForDisplayed({ timeout: 20000 });
    await passwordInput.waitForDisplayed({ timeout: 20000 });
    await loginBtn.waitForDisplayed({ timeout: 20000 });

    // 4) Input username/password
    await usernameInput.click();
    await usernameInput.setValue(username);

    await passwordInput.click();
    await passwordInput.setValue(password);

    // 5) Click login
    await loginBtn.click();

    // 6) Verify login success (basic)
    // Cách đơn giản nhất: check app vẫn ở package này và không crash
    // await driver.pause(4000);
    // //const currentPackage = await driver.execute('mobile: getCurrentPackage', []);
    // const currentPackage = await driver.execute('mobile: getCurrentPackage');

    // console.log('Current package after login:', currentPackage);

    // expect(currentPackage).to.equal('com.axlehire.drive.staging');
  });

  it('Close app', async () => {
    const result = await driver.terminateApp('com.axlehire.drive.staging');
    console.log('Terminate result:', result);
    expect(result).to.equal(true);
  });
});
