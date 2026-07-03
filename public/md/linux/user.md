# Linux User

## Create Group

```sh
sudo groupadd dev
```

## Create User

```sh
sudo useradd -g dev kenu
```

## Set up password

```sh
sudo passwd kenu
```

## Check user

- all users

```sh
cut -d: -f1 /etc/passwd
```

- my group

```sh
id
```

- user, group

```sh
ls -l /home
```

## Permission explained

- `drwxrwxrwx`
    - `d` = directory
    - `-` = file
    - `l` = symbolic link
    - `r` = read
    - `w` = write
    - `x` = execute
- numbers
    - 4 = r
    - 2 = w
    - 1 = x
- explain permission group
    - owner
    - group
    - others

