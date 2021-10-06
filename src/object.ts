export {};

let profile1: object = { name: 'Ham'};
profile1 = { birthYear: 1976 };

// objectのプロパティも型宣言可能
let profile2: {
  name: string;
} = { name: 'Ham' };
profile2 = { name: 'Taro' };