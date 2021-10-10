export {};

const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
}

debugProfile('Ham', 43);

type Profile = Parameters<typeof debugProfile>;

const profile: Profile = ['Gloria', 76];