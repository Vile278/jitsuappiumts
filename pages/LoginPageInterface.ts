import { BasePage } from './BasePage';
import { typeText } from '../utils/actions';
import { ILoginPage } from './interfaces/ILoginPage';

// login and waitForReady là 2 method bắt buộc phải có trong LoginPage, nếu thiếu sẽ báo lỗi ngay khi implement interface, đây là ưu điểm lớn của interface
// Bởi vì login and waitForReady là 2 method bắt buộc phải được implement ở đây, do chúng được khai báo ở interface ILoginPage
// Nếu quên implement 1 method là sẽ báo lỗi ngay, hãy thử comment 1 method bên dưới mà xem
export class LoginPage extends BasePage implements ILoginPage {

  // readonly USERNAME_XPATH = '(//android.widget.EditText)[1]';
  // readonly PASSWORD_XPATH = '(//android.widget.EditText)[2]';
  // readonly LOGIN_BTN_XPATH = '//android.widget.Button[@content-desc="Log In"]';

  // The third approach using getters
  get USERNAME_XPATH() {
    return '(//android.widget.EditText)[1]';
  } 
  get PASSWORD_XPATH() {
    return '(//android.widget.EditText)[2]';
  } 
  get LOGIN_BTN_XPATH() {
    return '//android.widget.Button[@content-desc="Log In"]';
  } 
  
  async waitForReady(): Promise<void> {
    const username = await $(this.USERNAME_XPATH);
    await username.waitForDisplayed({ timeout: 20000 });
  }

  async login(username: string, password: string): Promise<void> {
    await this.waitForReady();
    await typeText(this.USERNAME_XPATH, username);
    await typeText(this.PASSWORD_XPATH, password);

    const loginBtn = await $(this.LOGIN_BTN_XPATH);
    await loginBtn.click();
  }
}