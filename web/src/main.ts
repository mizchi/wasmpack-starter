import init, {add} from "wasm";

(async () => {
  await init();
  // init();
  const ret = add(1, 2);
  console.log(ret);
})();