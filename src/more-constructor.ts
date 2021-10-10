export {};

class Person {
  // アクセス修飾子をつけることで初期化処理が出来る
  constructor(public name: string, protected age: number) {}
}

const me = new Person('Ham-san', 43)
console.log(me);