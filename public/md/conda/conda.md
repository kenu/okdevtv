# MiniConda
* https://docs.anaconda.com/free/miniconda/
* free minimal installer for conda
  * Package, dependency and environment management for any language---Python, R, Ruby, Lua, Scala, Java, JavaScript, C/ C++, FORTRAN

## Basic Usage
1. 가상환경 만들기
  - `conda create -n pywin python=3.11.9`
  - `conda create -n oldpy python=3.7.1`
2. 가상환경 목록
  - `conda info --envs`
3. 가상환경 사용하기
  - `conda activate pywin`
  - `conda activate oldpy`
4. 가상환경 나가기
  - `conda deactivate`
5. 가상환경 지우기
  - `conda remove -n oldpy --all`
