# jupyter
- former ipython notebook
- interactive python environment
- can run python code

## install (2025)
```bash
# uv로 설치
pip install uv
uv venv
source .venv/bin/activate
uv add jupyter
```

## run
```bash
jupyter notebook
```

## python3
```bash
uv add ipykernel
python3 -m ipykernel install --user
```

## install packages in jupyter
```python
!uv add pandas matplotlib seaborn
```

## sample

```python
import sys
sys.path.append('/home/ec2-user/notebook/lib')
from pandas import Series, DataFrame

import mydb

sql = """-- 회원
select count(*) from USER
"""

result = mydb.query(sql, ())
df = DataFrame(result)

print(df)
```

```python
df.to_excel('01-member.xls', index=False)
print('Done')
```

```python
import mysql.connector

def query(sql, params):
  mydb = mysql.connector.connect(
    host="localhost",
    user="okdev",
    passwd="okpass",
    database="okdevtv"
  )

  mycursor = mydb.cursor()

  mycursor.execute(sql, params)

  mydb.close()

  return mycursor.fetchall()
```

## modern alternatives (2025)
- **JupyterLab** - 더 현대적인 인터페이스
- **VS Code** - Python 확장 기능으로 Jupyter 지원
- **Google Colab** - 클라우드 기반 Jupyter 환경

## ref
- https://jupyter.org/
- https://docs.astral.sh/uv/
- https://www.dataquest.io/blog/jupyter-notebook-tips-tricks-shortcuts/

## related
- [jupyter-notebook](/mib/jupyter/notebook)
