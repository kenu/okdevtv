# Chocolatey
* Windows Package Manager
* https://chocolatey.org/install
* https://chocolatey.org/docs/commands-reference

## Install
* PowerShell as Administrator
```
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```
