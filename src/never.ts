export {};

// 呼び元に戻ってこない型がnever(voidは戻ってくる)
function error(message: string): never {
  throw new Error(message);
}

try {
  let result = error('test');
  console.log({ result });
} catch (error) {
  console.log({ error });
}

let foo: void = undefined;
// never型にはデータが代入出来ない（error関数のみ使える）
let bar: never = error('only me');