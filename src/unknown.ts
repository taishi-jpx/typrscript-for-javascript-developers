export {};

const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;
// console.log(typeof numberUnknown);
// 型ガードという仕組み（unknown型をtypeofで型推論させて使うことでany型になることを回避）
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10;
  console.log(sumUnknown)
}