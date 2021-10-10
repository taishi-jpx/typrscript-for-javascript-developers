export {};

function add(a: number, b: number) {
  return a + b;
}

console.log(add(1,2));

// 戻り値の型を取ることが出来る
type ReturnTypefromAdd = ReturnType<typeof add>;

// (...args: any) => any ←関数であることを意味している
// inferは型推論（Rの型を推論している）
type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R 
? R 
: any;