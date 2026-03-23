import { expect } from 'chai';

describe('Jitsu App - Smoke Test', () => {
  it('Open app and verify package', async () => {
    // Activate app (force open)
    await driver.activateApp('com.axlehire.drive.staging');
  
    // Wait app load
    await driver.pause(3000);

    // Verify current package
    const pkg = await driver.execute('mobile: getCurrentPackage')
    console.log('Current package:', pkg);

    expect(pkg).to.equal('com.axlehire.drive.staging');
  });

  it('Close app', async () => {
    const isTerminated = await driver.terminateApp('com.axlehire.drive.staging');
    console.log('Terminate result:', isTerminated);

    // verify app closed (không còn foreground)
    await driver.pause(1000);
  });

});
