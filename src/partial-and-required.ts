export {};

type Profile = {
  name: string;
  // ?をつけるとオプショナル（あってもなくても良い）になる
  age?: number;
  zipCode: number
};

// この記載でPartialTypeの型はProfileのすべてのプロパティが、全部オプショナルになった型になる
type PartialType = Partial<Profile>;
// 上の逆
type RequiredType = Required<Profile>;