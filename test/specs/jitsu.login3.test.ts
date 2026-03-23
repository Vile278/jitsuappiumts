import { clearAppData } from '../../utils/device';
import { APP, DEVICE } from '../../utils/constants';
import { accounts } from '../../data/accounts';
import { loginFlow } from '../../flows/auth.flow';
import { verifyTutorialPage, startTutorialPage } from '../../flows/tutorial.flow';

describe('Jitsu App - Login', () => {
  beforeEach(async () => {
    await driver.activateApp(APP.PACKAGE);
    await driver.pause(1500);
  });

  it('Login with valid account', async () => {
    //console.log('SPEC LOADED: jitsu.login3.test.ts');
    await loginFlow(accounts.valid.username, accounts.valid.password);
    console.log(" Paused on the Home page for debugging... ");
    
    //await driver.pause(60000); // OK
    //await startTutorialPage(); // Đã chạy 
    // TODO: add assertion for home screen
    //await driver.pause(60000); 
    //await verifyTutorialPage();

  });

  afterEach(async () => {
    await clearAppData(APP.PACKAGE, DEVICE.UDID);
    await driver.terminateApp(APP.PACKAGE);
  });
});
