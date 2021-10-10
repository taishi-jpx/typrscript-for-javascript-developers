export {};

let  name = 'Atsushi';

name = 'HAm';

// コンストアサーションにより定数になる
let nickname = 'Ham' as const;
// nickname = 'Hamtaro';

let profile = {
  name: 'Atsushi',
  height: 178
} as const;

// profileのオブジェクトのas constにより書き換え出来ない
// profile.name = 'Ham';
// profile.height = 180;