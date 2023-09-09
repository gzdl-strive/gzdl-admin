import { VueWrapper, DOMWrapper } from "@vue/test-utils";

/**
 * 获取组件的类名集合
 * @param wrapper
 * @returns classes
 */
const getClassesByComWrapper = (
  wrapper: VueWrapper | DOMWrapper<unknown>,
): string[] => {
  return wrapper.classes().map((c) => c.replace("\n", ""));
};

export { getClassesByComWrapper };
