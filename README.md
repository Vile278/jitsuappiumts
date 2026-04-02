**PART I: SETUP**

**Create a Node.js project**

```bash
mkdir jitsu-appium-tests && cd jitsu-appium-tests
npm init -y
```

**Install main dependencies**

```bash
npm install --save-dev @wdio/cli @wdio/local-runner @wdio/mocha-framework @wdio/appium-service appium appium-uiautomator2-driver typescript ts-node @types/node @wdio/cucumber-framework
```

**Install APK**

```bash
C:\Users\Window 10\AppData\Local\Android\Sdk
adb install "C:\AllInOne\AuoTest\AppiumAuto\app-staging-release.apk"
```

---

**PART II: RUN**

**Prepare the device:**

* Go to the app screen (rectangle button >> close the Jitsu app)
* Log in to Jitsu >> click "..." >> log out
* Clear cache: click the button at the top of the screen

---

**Open Command Prompt**

**1. Start emulator (virtual phone):**

```bash
emulator -avd "Appium_Pixel_8" -no-snapshot -no-boot-anim -noaudio -delay-adb -gpu off
```

**Note:**
If there is an error, kill all emulator + adb processes and restart:

```bash
adb kill-server
taskkill /IM adb.exe /F
taskkill /IM emulator.exe /F
taskkill /IM qemu-system-x86_64.exe /F
```

Check device:

```bash
adb devices
```

If you see:

```
emulator-5554   device
```

→ the device is ready

---

**2. Start Appium**
Run in cmd:

```bash
appium
```

---

**3. Appium Inspector**

* Open the Appium app
* Use existing parameters (vile or jitsu) to connect to the emulator
* You can locate elements

---

**4. Run test**

Open VS Code → open folder:

```
C:\AllInOne\AuoTest\jitsu-appium-ts
```

(Note: `C:\AllInOne\AuoTest\jitsu-appium-tests` is the restructuring folder)

Run:

```bash
$env:TS_NODE_TRANSPILE_ONLY=1
npx wdio run ./wdio.conf.ts --ignore-cached
```

Run a specific file:

```bash
npx wdio run wdio.conf.ts --spec test/specs/jitsu.route.test.ts
```
Run some test cases "negative" for example:
```
npx wdio run wdio.conf.ts --spec test/specs/jitsu.MultiAccounts.test.ts --mochaOpts.grep="@negative"
Or:

```bash
npm run wdio
```

Or:

```bash
npx wdio run wdio.conf.ts
```

**5. Generate report**
```
Generate report:
```
npx allure generate allure-results --clean
```
Open the report
```
npx allure open
---
```
**Check APK info:**

```bash
& "C:\Users\Window 10\AppData\Local\Android\Sdk\build-tools\36.0.0\aapt.exe" dump badging "C:\AllInOne\AuoTest\AppiumAuto\app-staging-release.apk" | findstr "SdkVersion"
```

---

**Clear cache:**

```bash
Remove-Item -Recurse -Force .\node_modules\.cache
Remove-Item -Recurse -Force .\dist
```

---

**Fix TS2554 error:**

```bash
npm install --save-dev @cucumber/cucumber@^9
```

---

**Element:**

* “Start Tutorial” has class = `android.widget.Button`

---

**Question:**
Why does it work the first time when running:

```bash
emulator -avd "Appium_Pixel_8" -no-snapshot -no-boot-anim -noaudio -delay-adb
```

and then running:

```bash
aapt dump badging "C:\AllInOne\AuoTest\AppiumAuto\app-staging-release.apk" | findstr "SdkVersion"
```

(the APK gets installed automatically),

but after running:

```bash
adb uninstall com.axlehire.drive.staging
```

and then running again:

```bash
aapt dump badging "C:\AllInOne\AuoTest\AppiumAuto\app-staging-release.apk" | findstr "SdkVersion"
```

it hangs and does not install the Jitsu app on the device?
