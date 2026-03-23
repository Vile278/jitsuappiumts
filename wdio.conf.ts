import type { Options } from '@wdio/types';

//export const config: Options.Testrunner = {
export const config: any = {

  runner: 'local',

  specs: ['./test/specs/**/*.ts'],
  maxInstances: 1,

  hostname: '127.0.0.1',
  port: 4723,
  path: '/',

  logLevel: 'info',
  waitforTimeout: 20000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

  framework: 'mocha',
  reporters: ['spec'],

  mochaOpts: {
    ui: 'bdd',
    timeout: 180000
  },

  capabilities: [
    {
      platformName: 'Android',
      'appium:automationName': 'UiAutomator2',

      // emulator
      'appium:deviceName': 'Appium_Pixel_8',
      'appium:udid': 'emulator-5554',

      // Jitsu - bạn sửa đúng theo app của bạn
      'appium:appPackage': 'com.axlehire.drive.staging',
      'appium:appActivity': 'com.axlehire.drive.MainActivity',

      // optional
      'appium:noReset': true,
      'appium:newCommandTimeout': 180
    }
  ]
};
