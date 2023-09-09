import type {
  GenerateSafelistPXY,
  GenerateUnoSafeList,
  GenerateUnoSafelistOnlyPrefixOrSuffix,
  GenerateSafeListWidthPercent,
} from "./types/common";

// #region 给定最大值和前缀生成安全列表
/**
 * unocss样式安全列表类生成
 * @param prefix 前缀 string
 * @param max 最大值 number
 * @returns string[]
 */
function generateSafelistPXY<Prefix extends string, Max extends number>(
  prefix: Prefix,
  max: Max,
): GenerateSafelistPXY<Prefix, Max, 1> {
  const result: any = [];
  for (let i = 1; i < max; i++) {
    result.push(`${prefix}-${i}`, `${prefix}-${i + 0.5}`);
  }
  return result;
}
// #endregion

// #region 给定前缀字符和后缀字符/字符数组生成安全列表
/**
 * 生成UnoCSS安全列表数据
 * @param dataList 需要遍历的list
 * @param prefix 前缀 string
 * @param suffix 后缀 string | string[]
 */
function generateUnoSafelist<
  DataList extends readonly string[],
  Prefix extends string,
  Suffix extends string | readonly string[],
>(
  dataList: DataList,
  prefix: Prefix,
  suffix: Suffix,
): GenerateUnoSafeList<
  Mutable<DataList>,
  Prefix,
  Suffix extends string ? Suffix : Mutable<Suffix>
> {
  const result: any = [];
  if (Array.isArray(suffix)) {
    suffix.forEach((s) => {
      result.push(...generateUnoSafelist(dataList, prefix, s));
    });
  } else {
    dataList.forEach((data) => {
      result.push(`${prefix}-${data}-${suffix}`);
    });
  }
  return result;
}
// #endregion

// #region 给定前缀/后缀生成安全列表
/**
 * 生成UnoCSS安全列表数据
 * @param dataList 需要遍历的list
 * @param type 前缀/后缀
 * @param fixedValue 前缀/后缀值
 */
function generateUnoSafelistOnlyPrefixOrSuffix<
  DataList extends readonly string[],
  PreOrSuf extends "prefix" | "suffix",
  FixedValue extends string,
>(
  dataList: DataList,
  type: PreOrSuf,
  fixedValue: FixedValue,
): GenerateUnoSafelistOnlyPrefixOrSuffix<
  Mutable<DataList>,
  PreOrSuf,
  FixedValue
> {
  const result: any = [];
  if (type === "prefix") {
    dataList.forEach((data) => {
      result.push(`${data}-${fixedValue}`);
    });
  } else {
    dataList.forEach((data) => {
      result.push(`${fixedValue}-${data}`);
    });
  }
  return result;
}
// #endregion

// #region 给定前缀、最大值生成百分比
function generateSafeListWidthPercent<
  Prefix extends string,
  Max extends number,
>(prefix: Prefix, max: Max): GenerateSafeListWidthPercent<Prefix, Max> {
  const result: any = [];
  let i = 0;
  while (++i <= max) {
    result.push(`${prefix}-${i}%`);
  }
  return result;
}
// #endregion

export {
  generateUnoSafelist,
  generateSafelistPXY,
  generateUnoSafelistOnlyPrefixOrSuffix,
  generateSafeListWidthPercent,
};
