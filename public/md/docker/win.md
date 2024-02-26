# Docker in VM Windows
- for Windows in EC2

## Install

- @Deprecated at 2023/05/23: https://github.com/OneGet/MicrosoftDockerProvider
- transfered to: https://learn.microsoft.com/en-us/virtualization/windowscontainers/quick-start/set-up-environment?tabs=dockerce#windows-server-1
- Administrative PowerShell

```
Invoke-WebRequest -UseBasicParsing "https://raw.githubusercontent.com/microsoft/Windows-Containers/Main/helpful_tools/Install-DockerCE/install-docker-ce.ps1" -o install-docker-ce.ps1
install-docker-ce.ps1
reboot
```


## err

- case
  - `the input device is not a TTY.  If you are using mintty, try prefixing the command with 'winpty'`

```
winpty docker exec -it mysql bash
```

