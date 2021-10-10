export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string| number>;
type NunFunctionType = Exclude<SomeTypes, DebugType>;
// Functionは関数の型の総称（関数型を追加した場合に一個一個除外しなくてよいようにFunctionを記載する）
type TypeExcludeingFunction = Exclude<SomeTypes, Function>;
// Excract（抽出）
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;
type FunctionTypeExtracting = Extract<SomeTypes, Function>;

// nullとundefinedを省く
type NullabaleTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullabaleTypes>;