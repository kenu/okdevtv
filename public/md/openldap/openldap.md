# OpenLDAP

## OpenLDAP란?
OpenLDAP은 디렉터리 서비스를 제공하는 오픈소스 소프트웨어입니다. 쉽게 말하면, 중앙에서 사용자 정보와 권한을 관리할 수 있는 데이터베이스라고 생각하면 됩니다. 학교의 학생 명부나 회사의 직원 정보를 저장하고 관리하는 것과 비슷합니다.

## Amazon Linux 2023 EC2에 OpenLDAP 설치하기

### 1. EC2 인스턴스 준비하기
- Amazon Linux 2023 EC2 인스턴스가 실행 중이어야 합니다.
- SSH를 통해 인스턴스에 접속하세요.
- 관리자 권한(sudo)이 필요합니다.

### 2. 필요한 패키지 설치하기

```bash
# OpenLDAP 서버와 클라이언트 패키지 설치
sudo dnf install -y openldap openldap-servers openldap-clients
```

이 명령어는 OpenLDAP 서버와 클라이언트를 설치합니다. `-y` 옵션은 설치 중 나오는 모든 질문에 '예'라고 자동 응답하게 합니다.

### 3. OpenLDAP 서비스 시작하기

```bash
# OpenLDAP 서비스(slapd) 활성화 및 시작
sudo systemctl enable --now slapd
```

이 명령어는 OpenLDAP 서비스(slapd)를 시작하고, 시스템이 부팅될 때마다 자동으로 시작되도록 설정합니다.

### 4. 서비스 실행 확인하기

```bash
# slapd 서비스가 실행 중인지 확인
sudo systemctl status slapd
```

이 명령어는 OpenLDAP 서비스의 상태를 보여줍니다. `active (running)`이라고 표시되면 정상적으로 실행 중입니다.

### 5. 관리자 비밀번호 생성하기

```bash
# LDAP 관리자 비밀번호 생성
sudo slappasswd
```

이 명령어를 실행하면 비밀번호를 입력하라는 메시지가 나타납니다. 비밀번호를 두 번 입력하면 암호화된 비밀번호가 생성됩니다. 이 암호화된 비밀번호를 복사해두세요. 나중에 설정 파일에 사용할 것입니다.

### 6. 기본 데이터베이스 설정하기

```bash
# 기본 데이터베이스 설정 파일 복사
sudo cp /usr/share/openldap-servers/DB_CONFIG.okdevtv /var/lib/ldap/DB_CONFIG

# 권한 설정
sudo chown -R ldap:ldap /var/lib/ldap/

# 서비스 재시작
sudo systemctl restart slapd
```

이 단계에서는 OpenLDAP의 기본 데이터베이스 설정 파일을 복사하고, 적절한 권한을 설정한 후 서비스를 재시작합니다.

### 7. 기본 스키마 가져오기

```bash
# 기본 스키마 가져오기
sudo ldapadd -Y EXTERNAL -H ldapi:/// -f /etc/openldap/schema/cosine.ldif
sudo ldapadd -Y EXTERNAL -H ldapi:/// -f /etc/openldap/schema/nis.ldif
sudo ldapadd -Y EXTERNAL -H ldapi:/// -f /etc/openldap/schema/inetorgperson.ldif
```

스키마는 LDAP 디렉터리에 저장할 데이터의 구조를 정의합니다. 위 명령어들은 기본적인 스키마를 가져옵니다.

### 8. 도메인 설정하기

LDAP 도메인을 설정하기 위해 LDIF(LDAP Data Interchange Format) 파일을 만들어야 합니다.

```bash
# LDIF 파일 생성
sudo nano /tmp/domain.ldif
```

아래 내용을 입력하세요 (okdevtv.com을 원하는 도메인으로 변경하세요):

```ldif
dn: olcDatabase={1}mdb,cn=config
changetype: modify
replace: olcSuffix
olcSuffix: dc=okdevtv,dc=com

dn: olcDatabase={1}mdb,cn=config
changetype: modify
replace: olcRootDN
olcRootDN: cn=admin,dc=okdevtv,dc=com

dn: olcDatabase={1}mdb,cn=config
changetype: modify
replace: olcRootPW
olcRootPW: {SSHA}여기에_위에서_생성한_암호화된_비밀번호를_붙여넣으세요
```

파일을 저장하고 닫은 후, 다음 명령어로 적용하세요:

```bash
sudo ldapmodify -Y EXTERNAL -H ldapi:/// -f /tmp/domain.ldif
```

### 9. 기본 조직 구조 만들기

이제 기본 조직 구조를 만들어 보겠습니다.

```bash
# 조직 구조 LDIF 파일 생성
sudo nano /tmp/basedn.ldif
```

아래 내용을 입력하세요 (okdevtv.com을 위에서 설정한 도메인과 동일하게 변경하세요):

```ldif
dn: dc=okdevtv,dc=com
objectClass: top
objectClass: dcObject
objectClass: organization
o: Example Organization
dc: okdevtv

dn: ou=people,dc=okdevtv,dc=com
objectClass: organizationalUnit
ou: people

dn: ou=groups,dc=okdevtv,dc=com
objectClass: organizationalUnit
ou: groups
```

파일을 저장하고 닫은 후, 다음 명령어로 적용하세요:

```bash
# LDAP 관리자로 로그인하여 기본 구조 추가
sudo ldapadd -x -D cn=admin,dc=okdevtv,dc=com -W -f /tmp/basedn.ldif
```

이 명령어를 실행하면 관리자 비밀번호를 입력하라는 메시지가 나타납니다. 위에서 설정한 비밀번호를 입력하세요.

### 10. 방화벽 설정하기

LDAP 서비스에 외부에서 접속할 수 있도록 방화벽을 설정합니다.

```bash
# 방화벽에서 LDAP 포트(389) 열기
sudo firewall-cmd --permanent --add-service=ldap
sudo firewall-cmd --reload
```

### 11. 설치 확인하기

모든 설정이 완료되었는지 확인해봅시다.

```bash
# LDAP 검색 테스트
ldapsearch -x -b "dc=okdevtv,dc=com" -H ldap://localhost
```

이 명령어는 LDAP 디렉터리의 내용을 검색합니다. 오류 없이 결과가 나오면 성공적으로 설치된 것입니다.

## 주의사항

1. 실제 환경에서는 보안을 위해 LDAPS(LDAP over SSL)를 설정하는 것이 좋습니다.
2. EC2 보안 그룹에서도 LDAP 포트(389)를 열어주어야 외부에서 접속이 가능합니다.
3. 비밀번호는 복잡하게 설정하고 안전하게 보관하세요.

## 참고 자료
- [OpenLDAP 공식 문서](https://www.openldap.org/doc/)
- [Amazon Linux 2023 문서](https://docs.aws.amazon.com/linux/al2023/ug/what-is-amazon-linux.html)
