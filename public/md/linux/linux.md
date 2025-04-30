# Linux command

# Linux

- 1991 Linus Torvalds
- mimic of Unix
- for pc

## Basic commands
|basic commands	| mac	| windows |
|----|----|----|
|change directory	| `cd`	| `cd` |
|current directory	| `pwd`	| `cd` |
|list files	|`ls`, `ll`	| `dir` |
|list files info	| `ls -l`	| `dir` |
|view file content	| `cat filename`	| `type filename` |
|open site	| `open http://www.naver.com`	| `explorer http://www.naver.com` |
|edit file	| `nano filename`	| `notepad filename` |

## File extract 1 line

```
sed -n '3p' file

# Here's another:
head -n 3 file | tail -n 1
```

## File Encoding
- 확인
  `file -bi filename`

## File opened count
- `lsof | wc -l`

## inode file rm (too long file name)

```
ls -il
find . -inum 782263 -exec rm -i {} \;
```

## nobody 소유의 폴더 찾기

```
find . -type d  -user nobody
```

## 심볼릭 링크 찾기

```
find . -type l
```

## Port check
- `lsof -t -i:3000` # pid
- `lsof -i tcp:3000` # process

- 열린 포트 확인

```sh
lsof -i -nP | grep LISTEN | awk '{print $(NF-1)" "$1}' | sort -u
*:27017 mongod
*:8082 node
```

- 원격 열린 포트 확인

```sh
# dest
nc -l -p 7555 > myfile.txt
# mac
nc -l 7555 > myfile.txt

# source
nc 172.31.95.135 7555 < myfile.txt
```

## LC_CTYPE warning

- /etc/environment

```sh
LANG=en_US.utf-8
LC_ALL=en_US.utf-8
```

## change file encoding

```sh
iconv -f euc-kr -t utf-8 kimchi.txt > kimchi_utf8.txt
```

### multi files

```sh
mkdir utf8
for file in *.csv; do
    iconv -f euc-kr -t utf-8 "$file" > "utf8/${file%.csv}.utf8.csv"
done
```

## date

```sh
date '+%Y%m%d %H%M%S' # today
date -v-3d '+%Y%m%d %H%M%S' # 1 days before
# or
date -d "3days ago" '+%Y-%m-%d %H' # bash
```

## Timezone

- ~/.bash_profile

```sh
# .bash_profile
export TZ='Asia/Seoul';
```

- for cron

```sh
sudo cp -p /usr/share/zoneinfo/Asia/Seoul /etc/localtime
sudo service crond restart
```

## sudo

```sh
vi /etc/sudoers
```

```
## Allows people in group wheel to run all commands
# %wheel        ALL=(ALL)       ALL
%dev    ALL=(ALL)       ALL
```

## VGA 확인

```sh
sudo dnf install pciutils
lspci | grep -i vga
```

## file filter

```sh
find . -type f | egrep "gif$|jpg$|jpeg$|svg$|png$|webp$" | wc -l
```

## archive filtered list containing spaces in file name

```sh
find . -type f | grep -v list_files |egrep "php$|html$|htm$|js$|css$|inc$" > list.txt
tar cvfz text.tgz -T list.txt

find . -type f | grep -v list_files |egrep "gif$|jpg$|jpeg$|svg$|png$|ico$" > list_img.txt
tar cvfz img.tgz -T list_img.txt
```

## find and remove

```sh
find . -name .DS_Store | xargs rm
# to handle spaces in filenames
find . -name .DS_Store -print0 | xargs -0 rm
```

## Process 확인

```sh
ps -ef | grep httpd
ps x -o  "%p %r %c"
```

- group process kill

```sh
ps -ef | grep httpd
kill -TERM -- -22590
```

- process id

```sh
pgrep -f java
```

## htop

```sh
sudo dnf -y install htop
```

```sh
htop
htop -p "$(pgrep -vfd, 'java|python')"
```

## dust

```sh
wget https://github.com/bootandy/dust/releases/download/v1.1.1/dust-v1.1.1-x86_64-unknown-linux-gnu.tar.gz
tar xvfz dust-v1.1.1-x86_64-unknown-linux-gnu.tar.gz
sudo mv dust-v1.1.1-x86_64-unknown-linux-gnu/dust /usr/local/bin
rm -rf dust-v1.1.1-x86_64-unknown-linux-gnu*
sudo dust /
```

- https://github.com/bootandy/dust/releases

```sh
dust -h
```

## ls for second

```sh
ls -la --time-style=full-iso
```

## Mail

### sendmail
```sh
sudo dnf install sendmail -y
echo -e "Subject: Terminal Email Send\n\nEmail Content line 1\nEmail Content line 2" > content
sendmail recipient@example.com < content
```

### mutt
- 파일첨부
  - `mutt -s "subject" -i body.txt -a attachment.txt recipient@example.com`

### mail
- `mail -s "This is the subject" kenu.heo@gmail.com <<< 'This is the message'`

## other topics

- [dnf](/mib/linux/dnf)
- [systemctl](/mib/linux/systemctl)
- [cron](/mib/linux/cron)
- [curl](/mib/linux/curl)
- [pigz](/mib/linux/pigz) : parallel gzip

## ref

- vi 에디터에서 utf8, euc-kr 전환하기
  - http://egloos.zum.com/indirock/v/3791689
- Linux file descriptors
  - https://www.cyberciti.biz/tips/linux-procfs-file-descriptors.html
- Mutt
  - https://www.thegeekdiary.com/linux-unix-send-mail-with-attachment-using-mutt/
- Send mail from linux command line
  - https://www.lesstif.com/lpt/send-mail-from-linux-command-line-24445045.html
