export {};

type Pitcher1 = {
  throwingSpeed: number;
}

type Batter1 = {
  battingAverage: number;
}

const DaimajinSasaki: Pitcher1 = {
  throwingSpeed: 154
};

const OchiaiHiromitsu: Batter1 = {
  // throeingSpeed: 154,
  battingAverage: 0.367
}

// type TwoWayPlayer = {
//   throwingSpeed: number;
//   battingAverage: number;
// }

// 既存の型を組合わせて型合成が出来る
type TwoWayPlayer = Pitcher1 & Batter1

const OtaniShouhei: TwoWayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.286
}