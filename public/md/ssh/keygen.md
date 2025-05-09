# Access server without password
- 설정이 끝나면, 로그인에 비밀번호를 입력할 필요가 없어짐
- 로컬 컴퓨터의 비밀(private)키, 공개(public)키 필요

## Generate keys
- 로컬 컴퓨터에서 키 생성
- `ssh-keygen -t rsa`
- 비밀번호 물어봐도 끝까지 계속 엔터
- 또는,
- `ssh-keygen -t rsa -b 4096 -C "your_email@okdevtv.com" -f ~/.ssh/id_rsa -N ""`
- `cd ~/.ssh`
- **id_rsa** : 비밀키
- **id_rsa.pub** : 공개키
- **id_rsa.pub** 파일 확인. 퍼블릭키
- `cat ~/.ssh/id_rsa.pub`
- 내용을 복사

## Generate public key from private key
- `ssh-keygen -y -f ~/.ssh/id_rsa > ~/.ssh/id_rsa.pub`

### Server login
- 최초 설정 전까지는 비밀번호로 자동 접속할 서버에 접속
- **~/.ssh/authorized_keys** 파일을 생성해서 복사한 공개키를 붙여넣기
```
mkdir ~/.ssh
vi ~/.ssh/authorized_keys
```

### GitHub login
- **https:** 대신 **git:** 프로토콜을 사용함
- 브라우저에서 GitHub 설정페이지로 이동
  - https://github.com/settings/keys
- New SSH key 버튼을 클릭
- 로컬 컴퓨터 이름과 복사한 공개키를 붙여넣음
- 이후 `https` 대신 `git` 프로토콜로 clone 할 수 있음

## Check point
- 폴더와 파일의 퍼미션이 문제가 될 수 있음.
- 아래처럼 설정
- `chmod 700 ~/.ssh`
- `chmod 644 ~/.ssh/authorized_keys`

## Optional
- 윈도우에서 이 페이지의 명령을 사용하려면, http://git-scm.com 사이트에서 git 클라이언트 받아 설치하고 **git bash** 창에서 실행할 수 있음.

