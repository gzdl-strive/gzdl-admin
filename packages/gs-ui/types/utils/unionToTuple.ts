// 联合类型转交叉
// TS是结构类型系统，只要结构一致，就可以确定父子关系
// 逆变：父类型可以赋值给子类型
// 利用函数参数的逆变性质
// 分布式条件类型
type UnionToIntersection<U> =
  (U extends U ? (x: U) => unknown : never) extends (x: infer R) => unknown
    ? R
    : never;

// 联合类型转为函数重载(通过交叉形式书写)
type UnionToFuncIntersection<U> = UnionToIntersection<U extends U ? () => U : never>;

// 联合类型转元组
//* 重载函数的ReturnType返回的是最后一个重载的返回值类型
// 数量不定，递归处理
type UnionToTuple<U> = 
  UnionToFuncIntersection<U> extends () => infer ReturnType
    ? [...UnionToTuple<Exclude<U, ReturnType>>, ReturnType]
    : [];

export {
  UnionToTuple
}