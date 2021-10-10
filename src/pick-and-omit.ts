export {};

type DetailedProfile = {
  name: string;
  height: number;
  weight: number;
};
// 型抽出
type SimpleProfile = Pick<DetailedProfile, 'name' | 'weight'>;
// 型除外
type SmallProfile = Omit<DetailedProfile, 'height'>;

// type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
// type MySmallProfile = MyOmit<DetailedProfile, 'height'>;