// Interface là nơi chỉ khai báo actions, property, no code
export interface ILoginPage {
  waitForReady(): Promise<void>;
  login(username: string, password: string): Promise<void>;
}