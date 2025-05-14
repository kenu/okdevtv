# GitHub CLI command line interface
- https://cli.github.com/
- https://github.com/cli/cli#installation

```sh
brew install gh
gh auth login
```

## GitHub Copilot in terminal
```sh
gh extension install github/gh-copilot
gh copilot explain "sudo apt-get"
```

## GitHub browse
- `gh browse`

## Example

```sh
uv --version
take ~/git
uv init -p 3.10 pyth
cd pyth
windsurf .
uv venv
. .venv/Scripts/activate
gh --help
gh repo --help
gh auth login
gh repo create pyth --public
git remote add origin https://github.com/kenu/pyth
gh repo view --web
gh issue create
gh issue list
gh issue close 1
```

## ref
- https://cli.github.com/manual/
