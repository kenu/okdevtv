# CPP build error

```
3:10: fatal error: filesystem: No such file or directory
 #include <filesystem>
          ^~~~~~~~~~~~
compilation terminated.
```

```
sudo dnf install -y devtoolset-8 --nogpgcheck
scl enable devtoolset-8 bash
gcc --version
```
* from: https://stackoverflow.com/a/66376026/510222
