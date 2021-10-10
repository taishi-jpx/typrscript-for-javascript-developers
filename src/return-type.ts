export {};

function add(a: number, b: number) {
  return a + b;
}

console.log(add(1,2));

// 戻り値の型を取ることが出来る
type ReturnTypefromAdd = ReturnType<typeof add>;
