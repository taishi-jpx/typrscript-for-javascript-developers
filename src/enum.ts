export {};

// 先頭の数値を入れるだけで残りが連番になる
enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December
}

console.log(Months.January);
console.log(Months.February);
console.log(Months.December);

// const MonthsJs = {
//  January: 0,
//  February: 1
// };

enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GRREN = '#008000',
  BLUE = '#0000ff',
  BLACK = '#000000'
}

let green = COLORS.GRREN;
console.log({ green });

enum COLORS{
  YELLOW = '#FFFF00',
  GLAY = '#808080'
}

COLORS.YELLOW;