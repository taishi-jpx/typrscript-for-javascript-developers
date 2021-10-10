export {};

type MyExclude = 
// 左の型が右の方の互換性があるか true ? :の← flase ? → :の→（三項演算子）
 | (string extends string | number ? never : string)
 | (number extends string | number ? never : number)
 | (DebugType extends string | number ? never : DebugType)
type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string| number>;
type MyFunctionType = MyExclude;

// Excract（抽出）
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;

// nullとundefinedを省く
type NullabaleTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullabaleTypes>;