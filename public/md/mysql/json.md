# MySQL JSON
- MySQL 5.7.8 부터 DBMS 차원에서 JSON 데이타를 지원

## DDL
```sql
CREATE TABLE employees (
  id integer  AUTO_INCREMENT primary key,
  name VARCHAR(200),
  profile JSON
);
```

## DML insert
```sql
insert into employees(name, profile) values('홍길동', '{ "age" : 30, "gender" : "man", "부서": "개발" }');
```

```sql
insert into employees(name, profile) values('허광남', json_object(
    'age', 51,
    'gender', 'man',
    '부서', '연구'
));
```

```sql
insert into employees(name, profile) values('전은수', json_object(
    'age', 29,
    'gender', 'woman',
    '부서', '개발',
    '자격증', json_array('CISA', 'PMP', 'CISSP')
    ));
```

## 가져오기
```sql
-- not working
select id,name,json_extract(profile, '$."부서"')
from employees where json_extract(profile, '$."부서"') = '개발';
```

```sql
-- MySQL 의 "unquotes the extracted result" 연산자인 ->> 를 사용해서 Quote 를 제거
select id,name, profile ->> '$."부서"', json_extract(profile, '$."부서"')
from employees where profile ->> '$."부서"' like '개%';
```

```sql
select id, name, json_extract(profile, '$.age')
from employees where json_extract(profile, '$.age') >= 35;
```

## ref
- MySQL 에서 JSON Data사용하기
  - https://www.lesstif.com/dbms/mysql-json-data-54952420.html
