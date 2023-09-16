import { presetUno, presetAttributify, presetIcons } from "unocss";
import {
  generateSafelistPXY,
  generateUnoSafelist,
  generateUnoSafelistOnlyPrefixOrSuffix,
  generateSafeListWidthPercent,
} from "../src/utils/common";
import Unocss from "unocss/vite";

const colors: BasicColorList = [
  "blue",
  "green",
  "red",
  "black",
  "gray",
  "yellow",
  "indigo",
  "purple",
  "pink",
];

const icons: BasicIconList = ["search", "edit", "check", "message", "close"];

const justifyList: BasicJustifyList = [
  "start",
  "end",
  "center",
  "around",
  "between",
];

const safelist = [
  ...generateUnoSafelist(colors, "bg", ["100", "500"] as const),
  ...colors.map((color) => `hover:bg-${color}-400`),
  ...generateUnoSafelist(colors, "border", ["200", "500"] as const),
  ...generateUnoSafelist(colors, "text", "500"),
  ...generateUnoSafelist(colors, "hover:text", "400"),
  "text-white",
  ...icons.map((icon) => `i-ic-baseline-${icon}`),
  "i-mdi-eye-outline",
  "i-mdi-eye-off-outline",
  ...["xs", "sm", "base", "lg", "xl", "2xl", "3xl"].map(
    (size) => `text-${size}`,
  ),
  ...generateSafelistPXY("h", 20),
  ...generateSafelistPXY("w", 20),
  ...generateSafelistPXY("leading", 20),
  ...generateSafelistPXY("line-height", 20),
  ...generateSafelistPXY("px", 8),
  ...generateSafelistPXY("py", 8),
  ...generateSafelistPXY("gap", 8),
  ...generateUnoSafelistOnlyPrefixOrSuffix(justifyList, "suffix", "justify"),
  ...generateSafeListWidthPercent("w", 100),
];

export default () => {
  return Unocss({
    safelist,
    presets: [presetUno(), presetAttributify(), presetIcons()],
  });
};
