import init, {add} from "@internal/wasm";

(async () => {
  await init();
  // init();
  const ret = add(1, 2);
  console.log(ret);
})();