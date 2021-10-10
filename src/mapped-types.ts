export {};

type Profile = {
  name: string;
  age: number;
};

type PartialProfile = Partial<Profile>;
type PropaertyTypes = keyof Profile;

// in keyof がMappedType（中のものを一個づつ取り出して、処理する）
// ある型を見かけたときに定義に行って変更することも出来る）
type Optional<T> = { [P in keyof T]?: T[P] | null };
type OptionalProfile = Optional<Profile>;
