export {};

let name: any = 'Ham';

// 型アサーション（as 型)
// let length = name.length as number;

// nameが文字列で.lengthで長さ（number)
let length = (name as string).length;

// ↓も出来るが非推奨
// let length = (<string>name).length;


// length = 'foo';