export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'Ham',
  age:43
}

me.age++;

console.log(me);

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: 'Shigeru',
  age: 40
};

// readonlyなので変更出来ない
// friend.age++;

type YomirotiSenyo<T> = { readonly [P in keyof T]: T[P]; }
type YomitoriSenyoProfile = YomirotiSenyo<Profile>;