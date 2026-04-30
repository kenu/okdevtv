## GitHub `Verified`
- GPG 또는 S/MIME을 사용하여 로컬에서 작업에 서명(Verified) 가능
- 서명을 확인하여 다른 사람들이 당신의 커밋이 신뢰할 수 있는 소스 표시
- gpg 키 생성
- GitHub 이메일 사용

### process

- `gpg --full-generate-key`

```sh
Real name: KenuHeo
Email address: kenu.heo@gmail.com
Comment: github gpg
You selected this USER-ID:
    "KenuHeo (github gpg) <kenu.heo@gmail.com>"

Change (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? O
We need to generate a lot of random bytes. It is a good idea to perform
some other action (type on the keyboard, move the mouse, utilize the
disks) during the prime generation; this gives the random number
generator a better chance to gain enough entropy.
We need to generate a lot of random bytes. It is a good idea to perform
some other action (type on the keyboard, move the mouse, utilize the
disks) during the prime generation; this gives the random number
generator a better chance to gain enough entropy.
gpg: revocation certificate stored as '/Users/kenu/.gnupg/openpgp-revocs.d/9351ExxxxxxxxxF74E3.rev'
public and secret key created and signed.

pub   ed25519 2026-04-30 [SC] [expires: 2027-04-30]
      9351ExxxxxxxEE8F74E3
uid                      KenuHeo (github gpg) <kenu.heo@gmail.com>
sub   cv25519 2026-04-30 [E] [expires: 2027-04-30]
      888917Fxxxxxxxxxx5926C6C2575E7
```

- `gpg --list-secret-keys --keyid-format LONG`
```
gpg: checking the trustdb
gpg: marginals needed: 3  completes needed: 1  trust model: pgp
gpg: depth: 0  valid:   2  signed:   0  trust: 0-, 0q, 0n, 0m, 0f, 2u
gpg: next trustdb check due at 2027-04-30
[keyboxd]
---------
sec   ed25519/6E4xxxxxxxF74E3 2026-04-30 [SC] [expires: 2027-04-30]
      9351ExxxxxxxEE8F74E3
uid                 [ultimate] KenuHeo (github gpg) <kenu.heo@gmail.com>
ssb   cv25519/FE6xxxxxxxx575E7 2026-04-30 [E] [expires: 2027-04-30]
      888917FxxxxxxxxxxC2575E7
```

- `gpg --armor --export 6E4xxxxxxxF74E3`
```sh
-----BEGIN PGP PUBLIC KEY BLOCK-----

mDMEafN2kRYJKwYBBAHaRw8BAQdAQCKEsiinc9uesuvUZT3hM8LaZuaB7GIgm93X
0i607lC0KUtlbnVIZW8gKGdpdGh1YiBncGcpIDxrZW51Lmhlb0BnbWFpbC5jb20+
...
...
...
bWFudTIsMi41KzEuMTIsMCwzAhsMBQkB4TOAAAoJEG5DNovuj3TjvZ4BAJoBPn/+
ybqmqtLtNUyjUmR0DMTqUUQ9GDXP65oUcERLAQCCgEozcRp4NI6VhFqG1FSTOyCk
wZzD5eRLL1d4wP4DAQ==
.....
-----END PGP PUBLIC KEY BLOCK-----

```

### 3단계: GitHub에 키 등록
1. GitHub 접속 후 **Settings > SSH and GPG keys**로 이동합니다.
  - https://github.com/settings/keys
2. **New GPG key** 버튼을 클릭합니다.

- `git config --global user.signingkey 6E4xxxxxxxF74E3`
- `git config --global commit.gpgsign true`



## ref
- GitHub - 소스 커밋 서명 관리
  - https://docs.github.com/en/authentication/managing-commit-signature-verification
