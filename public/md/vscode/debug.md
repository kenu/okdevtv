# VSCode Debugging

## Node.js
* `.vscode/launch.json`

```json
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "pwa-node",
      "request": "launch",
      "name": "Launch Program",
      "skipFiles": [
        "<node_internals>/**"
      ],
      "env": {
        "CLIENT_SECRET": "......",
        "CLIENT_ID": "....."
      },
      "program": "${workspaceFolder}/bin/www"
    }
  ]
}
```
