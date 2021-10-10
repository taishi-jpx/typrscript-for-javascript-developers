export {};

class Animal {
  constructor(public name: string) {}
  run():string {
    return 'I can run';
  }
}

class Lion extends Animal {
  public speed: number;
  // 親クラスnameの初期化処理は親クラスがしてるが、speedはしてないので初期化処理が必要
  constructor(name: string, speed: number) {
    // 親クラスの継承にsuperが必要
    super(name);
    // 初期化処理
    this.speed = speed
  }

  run(): string {
    // const parentMessage = super.run();
    // console.log({ parentMessage });
    // バッククォート
    return `${super.run()} ${this.speed}km/h.`;
  }
}

// let animal = new Animal();
// console.log(animal.run());
// let lion = new Lion();
// console.log(lion.run());
console.log(new Animal('Mickey').run());
console.log(new Lion('Simba', 80).run());