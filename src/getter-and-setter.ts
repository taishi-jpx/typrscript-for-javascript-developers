// アクセサーはゲット（参照が出来るようにする）とセット（書き換えが出来るようにする）
export {};

// * ownner
//   * 所有者
//   * 初期化いに設定
//   * 途中で変更出来ない
//   ＊ 参照出来る
//  * secretNumber
//    * 個人番号
//    * 初期化時に設定
//    * 途中で変更できる
//    * 参照できない

class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number){
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  get owner() {
    return this._owner;
  }
  // 値を設定するときのみ実装するもの
  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard('Ham-san', 1234567890);
console.log(card.debugPrint());
card.secretNumber = 1111111111;
console.log(card.debugPrint());
// geterなので変更は出来ない（readOnly)
// card.owner = 'ham'
console.log(card.owner);

// 参照は出来ない
// card.secretNumber;
// card._secretNumber;
// setterなので参照は出来ない→undefinedになる
console.log(card.secretNumber);