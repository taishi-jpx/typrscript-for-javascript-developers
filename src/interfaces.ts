export {};

type ObjectType = { 
  name: string;
  age: number;
};

// ineterfaceも先頭大文字
interface ObjectInterface {
  name: string;
  age: number;
}
let object: ObjectInterface = {
  name: 'Ham-san',
  age: 43
}