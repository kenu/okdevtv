## GitHub `Verified`
* GPG 또는 S/MIME을 사용하여 로컬에서 작업에 서명 가능
* GitHub은 이러한 서명을 확인하여 다른 사람들이 당신의 커밋이 신뢰할 수 있는 소스로부터 왔다는 것 표시
* GitHub은 GitHub 웹 인터페이스를 사용하여 한 커밋에 자동으로 서명
* gpg 키 생성
* GitHub 이메일 사용

```
➜  ~ gpg --full-generate-key
gpg (GnuPG) 2.3.6; Copyright (C) 2021 Free Software Foundation, Inc.
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

Please select what kind of key you want:
   (1) RSA and RSA
   (2) DSA and Elgamal
   (3) DSA (sign only)
   (4) RSA (sign only)
   (9) ECC (sign and encrypt) *default*
  (10) ECC (sign only)
  (14) Existing key from card
Your selection?
Please select which elliptic curve you want:
   (1) Curve 25519 *default*
   (4) NIST P-384
   (6) Brainpool P-256
Your selection?
Please specify how long the key should be valid.
         0 = key does not expire
      <n>  = key expires in n days
      <n>w = key expires in n weeks
      <n>m = key expires in n months
      <n>y = key expires in n years
Key is valid for? (0)
Key does not expire at all
Is this correct? (y/N) y

GnuPG needs to construct a user ID to identify your key.

Real name: kenu
Email address: kenu.123@gmail.com
Comment: okdevtv
You selected this USER-ID:
    "kenu (okdevtv) <kenu.123@gmail.com>"

Change (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? O
We need to generate a lot of random bytes. It is a good idea to perform
some other action (type on the keyboard, move the mouse, utilize the
disks) during the prime generation; this gives the random number
generator a better chance to gain enough entropy.
We need to generate a lot of random bytes. It is a good idea to perform
some other action (type on the keyboard, move the mouse, utilize the
disks) during the prime generation; this gives the random number
generator a better chance to gain enough entropy.
gpg: directory '/Users/user/.gnupg/openpgp-revocs.d' created
gpg: revocation certificate stored as '/Users/user/.gnupg/openpgp-revocs.d/1F4A1184FF59695207C87953`803A32OKDEVTV355`.rev'
public and secret key created and signed.

pub   ed25519 2022-07-11 [SC]
      1F4A1184FF59695207C87953`803A32OKDEVTV355`
uid                      kenu (okdevtv) <kenu.123@gmail.com>
sub   cv25519 2022-07-11 [E]

➜  ~ gpg --list-secret-keys --keyid-format=long
gpg: checking the trustdb
gpg: marginals needed: 3  completes needed: 1  trust model: pgp
gpg: depth: 0  valid:   1  signed:   0  trust: 0-, 0q, 0n, 0m, 0f, 1u
/Users/user/.gnupg/pubring.kbx
------------------------------
sec   ed25519/`803A32OKDEVTV355` 2022-07-11 [SC]
      1F4A1184FF59695207C87953`803A32OKDEVTV355`
uid                 [ultimate] kenu (okdevtv) <kenu.123@gmail.com>
ssb   cv25519/85F2A9345731288F 2022-07-11 [E]
```

* 퍼블릭 키 생성

```
➜  ~ gpg --armor --export `803A32OKDEVTV355`
-----BEGIN PGP PUBLIC KEY BLOCK-----

mDMEYst9+RYJKwYBBAHaRw8BAQdArNRkSvwHL3c6AaWaI/LXKIBAPWR77Nk5HZsc
tJziKp+0JWtlbnUgKHllYXN0dWRpbykgPGtlbnUuaGVvQGdtYWlsLmNvbT6IkwQT
...
AhsMAAoJEIA6MucewXNVhgwA/RngcE8CS+KpC5u5130zGvpUFQK35JWfHLOa5clX
j7gKAP9SxmHCksD3rhA7qQUq2vNHIuwP+FRlFabNF4qUumiPDQ==
=qqe+
-----END PGP PUBLIC KEY BLOCK-----
➜  ~
```

* 퍼블릭 키를 GitHub Settings → SSH and GPG keys 에 등록
* https://github.com/settings/keys

## ref
* GitHub - 소스 커밋 서명 관리
  * https://docs.github.com/en/authentication/managing-commit-signature-verification
