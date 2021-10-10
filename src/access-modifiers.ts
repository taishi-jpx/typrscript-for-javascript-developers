export {};

class Person {
  // アクセス修飾子（privateなら他からアクセス出来ない）
  public name: string;
  // private age: number;
  protected age: number;
  protected nationality: string;

  // constructorの戻り値は型を書かない（returnしないから）
  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    // 親クラスのコンストラクタ実行
    super(name, age, nationality);
  }

  profile(): string {
    // アクセス修飾子がprivateのageは使えない。protectedのnationalityは使える
    return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
  }
}

let taro = new Person('Taro', 30, 'Japan');
console.log(taro.profile());
console.log(taro.name);
// console.log(taro.age);

// let hanako = new Person();
