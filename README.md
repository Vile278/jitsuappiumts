## PART I: SETUP

### Create a Node.js project

```bash
mkdir jitsu-appium-tests && cd jitsu-appium-tests
npm init -y
```

### Install main dependencies

```bash
npm install --save-dev @wdio/cli @wdio/local-runner @wdio/mocha-framework @wdio/appium-service appium appium-uiautomator2-driver typescript ts-node @types/node @wdio/cucumber-framework
```

### Install APK

```bash
adb install "C:\AllInOne\AuoTest\AppiumAuto\app-staging-release.apk"
```

---

## PART II: RUN

### Prepare the device

* Go to recent apps → close Jitsu app
* Open Jitsu → login → click "..." → logout
* Clear cache (button on top)

---

### 1. Start emulator

```bash
emulator -avd "Appium_Pixel_8" -no-snapshot -no-boot-anim -noaudio -delay-adb -gpu off
```

If error:

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

Expected:

```
emulator-5554   device
```

---

### 2. Start Appium

```bash
appium
```

---

### 3. Appium Inspector

* Open Appium app
* Connect to emulator using saved capabilities
* Inspect elements

---

### 4. Run test

Open project:

```
C:\AllInOne\AuoTest\jitsu-appium-ts
```

Run:

```bash
$env:TS_NODE_TRANSPILE_ONLY=1
npx wdio run ./wdio.conf.ts --ignore-cached
```

Run specific file:

```bash
npx wdio run wdio.conf.ts --spec test/specs/jitsu.route.test.ts
```

Run test with tag:

```bash
npx wdio run wdio.conf.ts --spec test/specs/jitsu.MultiAccounts.test.ts --mochaOpts.grep="@negative"
```

Or:

```bash
npm run wdio
```

Or:

```bash
npx wdio run wdio.conf.ts
```

---

### 5. Generate report

```bash
npx allure generate allure-results --clean
npx allure open
```

---

### Check APK info

```bash
"C:\Users\Window 10\AppData\Local\Android\Sdk\build-tools\36.0.0\aapt.exe" dump badging "C:\AllInOne\AuoTest\AppiumAuto\app-staging-release.apk" | findstr "SdkVersion"
```

---

### Clear cache

```bash
Remove-Item -Recurse -Force .\node_modules\.cache
Remove-Item -Recurse -Force .\dist
```

---

### Fix TS2554 error

```bash
npm install --save-dev @cucumber/cucumber@^9
```

---

### Element

* “Start Tutorial” → class: `android.widget.Button`
