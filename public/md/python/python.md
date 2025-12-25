# Python
- https://www.python.org/
- 1991 Guido Van Rossum
- hacker's favorite language

## basic
|python 실행	|python (py)|
|----|----|
|python 종료	|ctrl + D or `exit()`|
|python file 실행	|`python sample.py`, `py sample.py`|
|python 버전 확인	|`python -V`, `py -V`|

## pip(legacy)
- `curl -O https://bootstrap.pypa.io/get-pip.py`
- `sudo python get-pip.py`

### pip commands
- `pip --help`
- `pip list`
- `pip install virtualenv`
- `pip uninstall virtualenv`

## uv
- https://github.com/astral-sh/uv
- An extremely fast Python package installer and resolver, written in Rust
- 10-100x faster than pip
- Drop-in replacement for pip, pip-tools, and virtualenv

### install
```bash
# macOS and Linux
curl -LsSf https://astral.sh/uv/install.sh | sh

# Windows
powershell -c "irm https://astral.sh/uv/install.ps1 | iex"

# With pip
pip install uv

# With brew (macOS)
brew install uv
```

### uv commands
```bash
# Install packages
uv pip install requests
uv pip install -r requirements.txt

# Create virtual environment
uv venv
uv venv venv  # with custom name

# Activate virtual environment
source .venv/bin/activate  # macOS/Linux
.venv\Scripts\activate     # Windows

# Install packages in virtual environment
uv pip install pandas numpy

# Freeze dependencies
uv pip freeze > requirements.txt

# Uninstall packages
uv pip uninstall requests

# List installed packages
uv pip list

# Sync dependencies (like pip-sync)
uv pip sync requirements.txt
```

### uv features
- **Speed**: 10-100x faster than pip
- **Disk space**: Global cache to avoid re-downloading packages
- **Reliability**: Written in Rust for memory safety
- **Compatibility**: Drop-in replacement for pip commands
- **Resolution**: Advanced dependency resolver

## virtualenv (legacy)
- closed env
- `virtualenv venv`
- `source venv/bin/activate`
- `deactivate`

### python3 (mac)
- install brew
  - https://brew.sh

- install python3

```
brew install python3
virtualenv -p python3 venv3
source venv3/bin/activate

python -V
deactivate
```

## mac
- `Python is not installed as a framework` issue?
- `vi ~/.matplotlib/matplotlibrc`
```
backend: TkAgg
```

## 파일
- 파일 열어서 한 줄씩 출력하기
- 결과 파일 생성하기
- 참고: https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files

## 문자열(String)
- 문자열 포함
- 문자열 위치
- 문자열 추출

## list(array)
- 배열


## scipy on windows
- Unofficial Windows Binaries for Python Extension Packages
  - http://www.lfd.uci.edu/~gohlke/pythonlibs/#scipy
## ref
- Python Style Guide(PEP8)
  - https://peps.python.org/pep-0008/
  - https://okdevtv.com/mib/python/pep8
- 생활코딩 Python & Ruby
  - https://opentutorials.org/course/1750
- Tutoiral Point Python
  - https://www.tutorialspoint.com/python/
- Python 10 tasks
  - [10 things possible with Python](https://okdevtv.com/mib/python/10)
- jupyter
  - https://okdevtv.com/mib/python/jupyter
- jupyter-server
  - https://okdevtv.com/mib/python/jupyter-server
- pyenv
  - https://okdevtv.com/mib/python/pyenv
- pandas
  - https://okdevtv.com/mib/python/pandas
- matplotlib
  - https://okdevtv.com/mib/python/matplotlib
- datetime
  - https://okdevtv.com/mib/python/datetime
