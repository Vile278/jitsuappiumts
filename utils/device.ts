import { execSync } from 'child_process';

export function clearAppData(appPackage: string, udid = 'emulator-5554') {
  console.log(`Clearing app data for ${appPackage} on ${udid}...`);
  execSync(`adb -s ${udid} shell pm clear ${appPackage}`, { stdio: 'inherit' });
}
