export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Atsushi';
  static lastName: string = 'Ishida';

  static work() {
    // 中に変数埋め込むときはバック(`)
    return `Hey, guys! This is ${this.firstName}! Are you interested in Typescript? Let'S dive into Typescript!`
  }
}

// let me = new Me();
// console.log(me.isProgrammer);

// 静的メンバはクラス名（Me)を記載してアクセス（インスタンス化しなくてもアクセス出来る）
console.log(Me.isProgrammer);
console.log(Me.work());