# Makefile
- 코드 컴파일용 기술

## Bare gcc
```
gcc -o hellomake hellomake.c hellofunc.c -I.
```

## Makefile 1
```
hellomake: hellomake.c hellofunc.c
  gcc -o hellomake hellomake.c hellofunc.c -I.
```
- `tab` should be before `gcc`
  - or `Makefile:2: *** missing separator.  Stop.`

## ref
- A Simple Makefile Tutorial
  - https://www.cs.colby.edu/maxwell/courses/tutorials/maketutor/
