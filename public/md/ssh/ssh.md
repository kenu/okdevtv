# SSH

* 원격 서버 명령 실행

```
ssh user@server "command"
```

## ssh DB tunneling
```
ssh -N -L [local port]:[database host]:[remote port] [username]@[remote host]
ssh -N -L 3307:db.okdevtv.com:3306 ec2-user@gw.okdevtv.com
```

* open other terminal

```
mysql -u devuser -p -P 3307 -h 127.0.0.1
```

## related
* [ssh-keygen](/mib/ssh/keygen)
* [ssh-keygen en](/mib/ssh/keygen_en)

## ref
* Access Your Database Remotely Through an SSH Tunnel
  * https://support.cloud.engineyard.com/hc/en-us/articles/205408088-Access-Your-Database-Remotely-Through-an-SSH-Tunnel
* https://www.ssh.com/ssh/tunneling/example
