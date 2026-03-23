import { clearAppData } from '../../utils/device';
import { APP, DEVICE } from '../../utils/constants';
import { accounts } from '../../data/accounts';
import { createLoginPage } from '../../pages/factory/loginPage.factory';
import { ILoginPage } from '../../pages/interfaces/ILoginPage';
import { allowPermissionIfPopupShown,allowPermissionIfPopupShown2 } from '../../utils/permission';
import {Menu} from '../../pages/Menu';
import {MyPerformance} from '../../pages/MyPerformance';
import { TutorialPage } from '../../pages/TutorialPage';
import { ActiveAssignment } from '../../pages/ActiveAssignmentPage';

// Apply inteface: LoginPageInterface.ts

describe('Jitsu App - Login', () => {
  let loginPage: ILoginPage;

  beforeEach(async () => {
    await driver.activateApp(APP.PACKAGE);
    await driver.pause(1500);

    loginPage = createLoginPage();
  });

  it('Go to Tutorial and navigate through routes: ', async () => {
    //await allowPermissionIfPopupShown(10000);
    await allowPermissionIfPopupShown2(10000);
    await loginPage.login(
      accounts.valid.username,
      accounts.valid.password
    );
    // Click on My performance icon
    const menu = new Menu();
    await menu.clickProfile(20000);
    // Click on Tutorials
    const myPerformance = new MyPerformance();
    await myPerformance.clickTutorial(3000);
    // Click on back arrow (button)
    const tutorial = new TutorialPage();
    await tutorial.clickBackButton(3000);
    //click on Route
    await menu.clickRoutes(20000);
    //click quick tutorial
    const activeAssignment = new ActiveAssignment();
    await activeAssignment.clickQuitTutorial();

    await driver.pause(3000);
  });  

  afterEach(async () => {
    await clearAppData(APP.PACKAGE, DEVICE.UDID);
    await driver.terminateApp(APP.PACKAGE);
  });
});
