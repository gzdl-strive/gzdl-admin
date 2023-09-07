/* eslint-disable no-unused-vars */
import { UnionToTuple } from "./utils/unionToTuple";

declare global {
  // 颜色
  type BasicColor =
    | "blue"
    | "green"
    | "red"
    | "black"
    | "gray"
    | "yellow"
    | "indigo"
    | "purple"
    | "pink";
  type BasicColorList = Readonly<UnionToTuple<BasicColor>>;

  // 图标
  type BasicIcon = "search" | "edit" | "check" | "message" | "close";
  type BasicIconList = Readonly<UnionToTuple<BasicIcon>>;

  // 尺寸
  type BasicSize = "small" | "medium" | "large";

  // 布局
  type BasicJustify = "start" | "end" | "center" | "around" | "between";
  type BasicJustifyList = Readonly<UnionToTuple<BasicJustify>>;
}
