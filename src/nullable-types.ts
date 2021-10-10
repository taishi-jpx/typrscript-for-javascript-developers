export {};

// nullも許容したいときはユニオン型（|)を使う
let profile: { name: string; age: number | null } = {
  name: 'Ham',
  age: null
}
