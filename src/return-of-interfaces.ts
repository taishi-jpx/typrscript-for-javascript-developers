export {};

class Mahotsukai {}
class Souryo {}

// 継承クラスは一つのみ（多重継承は許されない）→ 複数のinterface(抽象クラスみたいなもの)を継承させる（実装させる）ことが出来る
class Taro extends Mahotsukai {}

interface Kenja {
  ionazun(): void;
}
interface Senshi {
  // voidは｛｝がいらない
  kougeki(): void;
}

// インターフェイスの継承（実装 implements)は複数指定しても大丈夫
class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log('ionazun');
  }
  kougeki(): void {
    console.log('kougeki');
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();