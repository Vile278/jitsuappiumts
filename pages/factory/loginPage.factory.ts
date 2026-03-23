// Factory quyết định dùng class nào
// Test chỉ dùng interface
import { ILoginPage } from '../interfaces/ILoginPage';
import { LoginPage } from '../LoginPage';

export function createLoginPage(): ILoginPage {
  return new LoginPage();
}