import { clickIfDisplayed } from './actions';

const ALLOW_XPATH =
   '//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_button"]';

export async function waitForPermission(timeout = 10000): Promise<boolean> {
  const button = await $(ALLOW_XPATH);
  await button.waitForDisplayed({ timeout });
  return true;
}
// Tương tự như login, có timeout, kiểm tra xuất hiện trước khi  click
export async function allowPermissionIfPopupShown2(timeout = 10000) {
  try
  {
    await waitForPermission(timeout);
    const button = $(ALLOW_XPATH); 
    await button.click();
    console.log('Permission popup is handled');
  }
  catch
  {
    console.log('Permission popup is not handled');
  }
}
// const ALLOW_XPATH = 'com.android.permissioncontroller:id/permission_allow_button';
// export async function allowPermissionIfPopupShown() {
//   const clicked = await clickIfDisplayed(ALLOW_XPATH, 10000);
//   if (clicked) console.log('Permission popup handled');
// }
// Dùng try ...catch bọc khối code trên because không phải lúc nào popup cũng xuất hiện:
// Nếu không dùng try ...catch thì test vẫn PASS nhưng ở lần chạy đầu tiên log bắn ra không tìm thấy element 
export async function abc(timeout = 2000) {
  try {
    console.log('handled!');
    return true;
  } catch {
    console.log('not handled!')
    return false;
  }
}

export async function allowPermissionIfPopupShown(timeout = 10000) {
  try {
    const button = $$(ALLOW_XPATH); // Sử dụng $$ + if để làm sạch log, nếu dùng $ thì log bắn ra rất nhiều nếu không tìm thấy element
    if (await button.length === 0) return false;
    await button[0].waitForDisplayed({ timeout });
    await button[0].click();
    console.log('Permission popup handled');
    return true;
  } catch {
    // popup không xuất hiện → bỏ qua
    return false;
  }
}
