// 使用数组来做计数
type BuildArray<
  Length extends number,
  Ele = unknown,
  Result extends unknown[] = [],
> = Result["length"] extends Length
  ? Result
  : BuildArray<Length, Ele, [...Result, Ele]>;

// 加
// eslint-disable-next-line no-unused-vars
type Add<Num1 extends number, Num2 extends number> = [
  ...BuildArray<Num1>,
  ...BuildArray<Num2>,
]["length"];

// 去除索引类型的readonly
// eslint-disable-next-line no-unused-vars
type Mutable<Obj> = {
  -readonly [Key in keyof Obj]: Obj[Key];
};
