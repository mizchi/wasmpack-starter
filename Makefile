setup:
	cargo check

build: setup
	cd wasm && wasm-pack build --target web --out-name mod --release

build-debug: setup
	cd wasm && wasm-pack build --target web --out-name mod --debug

test: setup
	cargo test

dev: build-debug
	cd web && pnpm dev
