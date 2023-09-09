type GenerateSafelistPXY<
  Prefix extends string,
  Max extends number,
  CurIndex extends number,
  Result extends string[] = [],
> = CurIndex extends Max
  ? Result
  : Add<CurIndex, 1> extends number
  ? GenerateSafelistPXY<
      Prefix,
      Max,
      Add<CurIndex, 1>,
      [...Result, `${Prefix}-${CurIndex}`, `${Prefix}-${CurIndex}.5`]
    >
  : Result;

type GenerateUnoSafeList<
  DataList extends string[],
  Prefix extends string,
  Suffix extends string | string[],
  Result extends string[] = [],
> = [Suffix] extends [string]
  ? DataList extends [infer First, ...infer Rest extends string[]]
    ? GenerateUnoSafeList<
        Rest,
        Prefix,
        Suffix,
        [...Result, `${Prefix}-${First & string}-${Suffix}`]
      >
    : Result
  : Suffix extends [
      infer SuffixFirst extends string,
      ...infer SuffixRest extends string[],
    ]
  ? GenerateUnoSafeList<
      DataList,
      Prefix,
      SuffixRest,
      [...Result, ...GenerateUnoSafeList<DataList, Prefix, SuffixFirst, []>]
    >
  : Result;

type GenerateUnoSafelistOnlyPrefixOrSuffix<
  DataList extends string[],
  PreOrSuf extends "prefix" | "suffix",
  FixedValue extends string,
  Result extends string[] = [],
> = PreOrSuf extends "prefix"
  ? DataList extends [infer First, ...infer Rest extends string[]]
    ? GenerateUnoSafelistOnlyPrefixOrSuffix<
        Rest,
        PreOrSuf,
        FixedValue,
        [...Result, `${First & string}-${FixedValue}`]
      >
    : Result
  : DataList extends [infer First, ...infer Rest extends string[]]
  ? GenerateUnoSafelistOnlyPrefixOrSuffix<
      Rest,
      PreOrSuf,
      FixedValue,
      [...Result, `${FixedValue}-${First & string}`]
    >
  : Result;

type GenerateSafeListWidthPercent<
  Prefix extends string,
  Max extends number,
  CurIndex extends number = 1,
  Result extends string[] = [],
> = CurIndex extends Max
  ? [...Result, `${Prefix}-${CurIndex}%`]
  : Add<CurIndex, 1> extends number
  ? GenerateSafeListWidthPercent<
      Prefix,
      Max,
      Add<CurIndex, 1>,
      [...Result, `${Prefix}-${CurIndex}%`]
    >
  : Result;

export {
  GenerateSafelistPXY,
  GenerateUnoSafeList,
  GenerateUnoSafelistOnlyPrefixOrSuffix,
  GenerateSafeListWidthPercent,
};
