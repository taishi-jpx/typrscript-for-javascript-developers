export {};

// 別名(alias)は最初が大文字(型エイリアス type 別名 = )
type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello';

const example1 = {
  name : 'Ham',
  age: 43
};

type Profile = {
  name: string;
  age: number;
}

const example2: Profile2 = {
  name : 'Ham',
  age: 43
};

// リバースエンジニアリングとしてexample1の型を使うことが出来る
type Profile2 = typeof example1