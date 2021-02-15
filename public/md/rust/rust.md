# Rust
* https://www.rust-lang.org/

## install
* https://www.rust-lang.org/tools/install
* Windows C++ build tools
  * https://visualstudio.microsoft.com/visual-cpp-build-tools/

## Basic
* `rustc --version`
* `main.rs`

```rust
fn main() {
    println!("Hello, world!");
}
```

## Build & Run
* `rustc main.rs`
* `./main`

## cargo package manager
```bash
curl https://sh.rustup.rs -sSf | sh
```

* https://doc.rust-lang.org/cargo/getting-started/installation.html

## cargo how to
```
cargo new hello_world
```

* `Cargo.toml`

```
[package]
name = "hello_world"
version = "0.1.0"
authors = ["Your Name <you@example.com>"]
edition = "2018"

[dependencies]
```

* `src/main.rs`

```rust
fn main() {
    println!("Hello, world!");
}
```

* build

```
cargo build
```

* run

```
./target/debug/hello_world
Hello, world!
```

## ref
* https://www.rust-lang.org/learn
