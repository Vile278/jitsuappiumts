import { BasePage } from './BasePage';
import { typeText } from '../utils/actions';

export class LoginPage extends BasePage {
  
  // the first approach using private
  // dùng readonly chính xác hơn, readonly là để bảo vệ property trong class, nó giống như const bảo vệ parameter/iến trong function/method
  //private USERNAME_XPATH = '(//android.widget.EditText)[1]';
  // private PASSWORD_XPATH = '(//android.widget.EditText)[2]';
  // private LOGIN_BTN_XPATH = '//android.widget.Button[@content-desc="Log In"]';
  
  // The second approach using readonly
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
  
  async waitForReady() {
    const username = await $(this.USERNAME_XPATH);
    await username.waitForDisplayed({ timeout: 20000 });
  }

  async login(username: string, password: string) {
    try 
    {
      await this.waitForReady();
      await typeText(this.USERNAME_XPATH, username);
      await typeText(this.PASSWORD_XPATH, password);

      const loginBtn = await $(this.LOGIN_BTN_XPATH);
      await loginBtn.click();
    }
    catch{}
  }
}