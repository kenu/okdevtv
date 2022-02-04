# Time based One Time Password
* 30초 단위로 인증번호를 생성하고 인증번호를 입력하면 인증 완료
* 2 Factor Authentication

## 프로세스
1. Sign up
2. QR code scan in Authentificator App
  * https://apps.apple.com/app/google-authenticator/id388497605
  * https://apps.apple.com/app/microsoft-authenticator/id983156458
  * https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2
  * https://play.google.com/store/apps/details?id=com.azure.authenticator
3. Login with 6-digit code in Authentificator App

## Key Uri Format
* `otpauth://TYPE/LABEL?PARAMETERS`
  * `TYPE`: `totp` or `hotp`
  * https://github.com/google/google-authenticator/wiki/Key-Uri-Format

## ref
* https://github.com/kenu/totp
* https://blog.shahednasser.com/how-to-add-authentication-with-google-authenticator-in-node-js/
