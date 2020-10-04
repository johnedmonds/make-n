# make-n
Given a list of numbers and a target, returns the operations between the numbers to make that target

For example, running the following command

    cargo run -- 24 1 4 5

Will output

    (4 * (5 + 1))
    (4 * (1 + 5))

## Web Frontend

```
cd math24wasm
wasm-pack build
cd www
npm run start
```

Use `npm run build` in `math24wasm/www` to create the dist folder.