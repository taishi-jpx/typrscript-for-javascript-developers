export {};

// const echo = (arg: number): number => {
//   return arg;
// };

// const echo = (arg: string): string => {
//   return arg;
// }

// 抽象型のTに変更（<T>←これがTが抽象型であることを示す）→この書き方だと引数と戻り値の型が一致する
const echo = <T>(arg: T): T => {
  return arg;
};

console.log(echo<number>(100));
console.log(echo<string>('Hallo!'));
console.log(echo<boolean>(true));

class Mirror<T> {
  constructor(public value: T) {}

  echo(): T {
    return this.value;
  }
}

// <>の中に具体的な型を記載
console.log(new Mirror<number>(123).echo());
console.log(new Mirror<string>('Neko,Dayo').echo());
console.log(new Mirror<boolean>(true).echo());