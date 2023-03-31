# Additional Challenge

Explain the process of publishing the app to the Play Store and Apple App Store, and
share any personal experience or anecdotal evidence you have.

I have been working with react-native for about 5 years now. 
I have deployed apps like MTN D2R app, WorkRaven, uLesson, Remedy Portal, Affixdot and more.

The process of publishing to the stores have changed with time especially on the Android part.

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

The steps listed here [Publishing To the Play Store](https://reactnative.dev/docs/signed-apk-android) to generate a Keystore file that will be used to generate an android bundle using the `./gradlew bundleRelease` (.aab file)

This keystore file also must be used to generate SHA keys that will be uploaded to the store.

## EXTRA

One particular process I keep forgetting is how to get a App Store distribution certificate and Provisioning Profile even though I have done it multiple times

## NOTES
API KEYS and SECRETS should be managed by using a .env file / react-native-dotenv module. There are also other ways to manage them including using aws secret manager etc. It all depends on the situation