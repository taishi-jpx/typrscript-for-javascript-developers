export {};


abstract class Animal {
  // 抽象メソッドは抽象クラスでしか使えない（必ずoverrideしないと行けない）
  abstract cry():string;
}

class Lion extends Animal {
  cry() {
    return 'roar';
  }
}

// 抽象クラスの抽象メソッドについて、継承した子クラス側で実装し忘れを防止出来る
//  ↓エラーになる
// class Tiger extends Animal {}
class Tiger extends Animal {
  cry() {
    return 'grrrr';
  }
}