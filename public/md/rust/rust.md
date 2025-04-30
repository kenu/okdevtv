# Rust
- https://www.rust-lang.org/
- Korean ebook:
  - https://doc.rust-kr.org/

## install
- https://www.rust-lang.org/tools/install
- Windows C++ build tools
  - https://visualstudio.microsoft.com/visual-cpp-build-tools/

## Basic
- `rustc --version`
- `main.rs`

```rust
fn main() {
    println!("Hello, world!");
}
```

## Build & Run
- `rustc main.rs`
- `./main`

## cargo package manager
```bash
curl https://sh.rustup.rs -sSf | sh
```

- https://doc.rust-lang.org/cargo/getting-started/installation.html

## cargo how to
```
cargo new hello_world
```

- `Cargo.toml`

```
[package]
name = "hello_world"
version = "0.1.0"
authors = ["Your Name <you@example.com>"]
edition = "2018"

[dependencies]
```

- `src/main.rs`

```rust
fn main() {
    println!("Hello, world!");
}
```

- build

```
cargo build
```

- run

```
./target/debug/hello_world
Hello, world!
```

## Dependency

```
[dependencies]
time = "0.1.12"
regex = "0.1.41"
ferris-says = "0.2"
```

```rust
use ferris_says::say;
use std::io::{stdout, BufWriter};
use regex::Regex;

fn main() {
    let re = Regex::new(r"^\d{4}-\d{2}-\d{2}$").unwrap();
    println!("Did our date match? {}", re.is_match("2014-01-01"));

    let stdout = stdout();
    let message = String::from("Hello fellow Rustaceans!");
    let width = message.chars().count();

    let mut writer = BufWriter::new(stdout.lock());
    say(message.as_bytes(), width, &mut writer).unwrap();
}
```

## ref
- https://www.rust-lang.org/learn
- https://doc.rust-kr.org/

<img src="https://www.rust-lang.org/static/images/ferris.gif" alt="rustacean" />
