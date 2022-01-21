# CPP build error

```
3:10: fatal error: filesystem: No such file or directory
 #include <filesystem>
          ^~~~~~~~~~~~
compilation terminated.
```

```
sudo yum install -y devtoolset-8 --nogpgcheck
scl enable devtoolset-8 bash
```
* from: https://stackoverflow.com/a/66376026/510222
