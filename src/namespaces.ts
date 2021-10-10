export {};
// フォルダ（名前空間）を作って、同名のクラスを作ることが出来る
namespace Japanese {
  export namespace Tokyo {
    // 外空間からアクセスするためにexportが必要
    export class Person {
    constructor(public name: string) {}
      }
  }

  export namespace Osaka {
    // 外空間からアクセスするためにexportが必要
    export class Person {
    constructor(public name: string) {}
      }
  } 
}


namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
      ) {}
  }
}

const me = new Japanese.Tokyo.Person('Ham-san');
console.log(me.name);

const meOsaka = new Japanese.Tokyo.Person('Ham-yan');
console.log(meOsaka.name);

const michael = new English.Person('Michael', 'Joseph', 'Jankson');
console.log(michael);