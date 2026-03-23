PHAN I SETUP

Tạo project Node.js

mkdir jitsu-appium-tests && cd jitsu-appium-tests
npm init -y


Cài dependencies chính

npm install --save-dev @wdio/cli @wdio/local-runner @wdio/mocha-framework @wdio/appium-service appium appium-uiautomator2-driver typescript ts-node @types/node @wdio/cucumber-framework

Cài APK:

C:\Users\Window 10\AppData\Local\Android\Sdk
adb install "C:\AllInOne\AuoTest\AppiumAuto\app-staging-release.apk"


PHAN 2 RUN
Mình đang vọc automation test bằng appium + ts, đã làm được 3 step 1,2,3. Hãy hướng dẫn mình step 4 viết code bằng ts để test application Jitsu đã được mình install vào phone ảo
Chuẩn bị device:
Về màn hình app (nút hình chữ nhật >> đòng app Jitsu
Log in vào Jitsu >> click dấu ... >> log out
Xoá cache: Click vào button ở phí trên màn hình.

Mở cmd window
1. Start emulator: Để bật semulator (phone ảo)

emulator -avd "Appium_Pixel_8" -no-snapshot -no-boot-anim -noaudio -delay-adb -gpu off

note:
Nếu lỗi thì Kill sạch emulator + adb rồi mở lại
Chạy lần lượt:
adb kill-server
taskkill /IM adb.exe /F
taskkill /IM emulator.exe /F
taskkill /IM qemu-system-x86_64.exe /F
Kiểm tra 
adb devices
Nếu thấy:
emulator-5554   device
Là device đã lên

2. Start appium:
cmd: chạy appium

3. Appium Inspector (mở app Appium)
mớ para có sẵn vile hoặc jitsu rồi chạy sẽ kết nối với semulator (phone ảo)
Có thể localor elements

4. run test:
Chạy VS code >> mở folder C:\AllInOne\AuoTest\jitsu-appium-ts

(folder C:\AllInOne\AuoTest\jitsu-appium-tests là folder đang restructure)


$env:TS_NODE_TRANSPILE_ONLY=1
npx wdio run ./wdio.conf.ts --ignore-cached

chạy 1 file: npx wdio run wdio.conf.ts --spec test/specs/jitsu.route.test.ts

hoặc:
npm run wdio
hoặc:
npx wdio run wdio.conf.ts

& "C:\Users\Window 10\AppData\Local\Android\Sdk\build-tools\36.0.0\aapt.exe" dump badging "C:\AllInOne\AuoTest\AppiumAuto\app-staging-release.apk" | findstr "SdkVersion"


Xoá cache:
Remove-Item -Recurse -Force .\node_modules\.cache
Remove-Item -Recurse -Force .\dist

phải cài thêm để loại bỏ lỗi TS2554:
npm install --save-dev @cucumber/cucumber@^9

element:
Start Tutorial có class = android.widget.Button


tai sao lần đầu chạy:
emulator -avd "Appium_Pixel_8" -no-snapshot -no-boot-anim -noaudio -delay-adb
rồi chạy lệnh này thì cài được APK luôn:
aapt dump badging "C:\AllInOne\AuoTest\AppiumAuto\app-staging-release.apk" | findstr "SdkVersion"

nhưng sau đo mình chạy:
adb uninstall com.axlehire.drive.staging

rồi chạy lại aapt dump badging "C:\AllInOne\AuoTest\AppiumAuto\app-staging-release.apk" | findstr "SdkVersion"
thì cứ thấy treo không cài app Jitsu vào device 

