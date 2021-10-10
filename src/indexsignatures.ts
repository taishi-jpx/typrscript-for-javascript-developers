export {};

interface Profile {
  name: string;
  underTwenth: boolean;
  // 必須のみ上に記載、↓のindexシグネチャがあるので、外での追加も可能
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: 'Ham', underTwenth: false};

// How to write index signatures
//  { [ index: typeForIdex ]: typeForValue }

// オブジェクトに毎回型を追加していくのは、メンテナンスとして現実的にはない
// すべての型宣言しなくてもindexシグネチャーを使うことが出来る
profile.name = 'Ham';
profile.age = 43;
profile.nationality = 'Japna';