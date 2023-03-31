# Additional Challenge

Explain the process of publishing the app to the Play Store and Apple App Store, and
share any personal experience or anecdotal evidence you have.

## iOS
### Requirements 
- Apple Development Account
- MacOS
- XCode
- Provisioning Profile

After `archiving` the iOS build using XCode, and the uploading it to the `https://appstoreconnect.apple.com/login` and uploading all assets and other requirements of the App Store. 

App will then be submitted for review.

## Android 

### Requirements
- Android sdk

The steps listed here (Publishing To the Play Store)[https://reactnative.dev/docs/signed-apk-android] to generate a Keystore file that will be used to generate an android bundle using the `./gradlew bundleRelease` (.aab file)

This keystore file also must be used to generate SHA keys that will be uploaded to the store.