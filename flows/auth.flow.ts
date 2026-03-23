import { LoginPage } from '../pages/LoginPage';
import { allowPermissionIfPopupShown } from '../utils/permission';

export async function loginFlow(username: string, password: string) {
  const loginPage = new LoginPage();

  await allowPermissionIfPopupShown(5000);
  await loginPage.login(username, password);
}