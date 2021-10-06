export {};

// シグネチェー
function double(value: number): number;
function double(value: string): string;

// overloadでは型制約を行わない（シグネチャー側で型制約出来ている）
function double(value: any): any {
  console.log(typeof value);
  if (typeof value === 'number') {
    return value * 2;
  } else {
    return value + value;
  }
}

console.log(double(100));
console.log(double('Go '));
// console.log(double(true));