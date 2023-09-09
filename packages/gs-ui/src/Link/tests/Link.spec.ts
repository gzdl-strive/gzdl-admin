import { describe, expect, test } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { getClassesByComWrapper } from "@/utils/test";
import Link from "../Link";

// 默认模板
const defaultSlots = {
  slots: {
    default: "Link",
  },
};

// 测试链接文字
describe("Link", () => {
  // mount
  test("mount @vue/test-utils", () => {
    const wrapper = shallowMount(Link, defaultSlots);
    // 断言
    expect(wrapper.text()).toBe("Link");
  });
});

// 测试颜色
describe("color", () => {
  // 默认字体颜色为黑色，且悬浮色为蓝色
  test("default", () => {
    const wrapper = shallowMount(Link, defaultSlots);
    expect(getClassesByComWrapper(wrapper).includes("text-black")).toBe(true);
    expect(
      getClassesByComWrapper(wrapper).includes("hover:text-blue-500"),
    ).toBe(true);
  });
  // 主要链接颜色、悬浮色
  test("blue", () => {
    const wrapper = shallowMount(
      Link,
      Object.assign(defaultSlots, {
        props: {
          color: "blue",
        },
      }),
    );
    expect(getClassesByComWrapper(wrapper).includes("text-blue-500")).toBe(
      true,
    );
    expect(
      getClassesByComWrapper(wrapper).includes("hover:text-blue-400"),
    ).toBe(true);
  });
});

// 测试是否禁用
describe("disabled", () => {
  test("default", () => {
    const wrapper = shallowMount(Link, defaultSlots);
    expect(getClassesByComWrapper(wrapper).includes("cursor-pointer")).toBe(
      true,
    );
  });
  test("disabled", () => {
    const wrapper = shallowMount(
      Link,
      Object.assign(defaultSlots, {
        props: {
          disabled: true,
        },
      }),
    );
    const classes = getClassesByComWrapper(wrapper);
    expect(
      classes.includes("cursor-not-allowed") && classes.includes("op-50"),
    ).toBe(true);
  });
});

// 测试是否存在下划线
describe("underline", () => {
  // 默认情况下，非禁用，悬浮出现下划线
  test("default", () => {
    const wrapper = shallowMount(
      Link,
      Object.assign(defaultSlots, {
        props: {
          disabled: false,
        },
      }),
    );
    expect(getClassesByComWrapper(wrapper).includes("hover:b-b-solid")).toBe(
      true,
    );
  });
  // 禁用情况，悬浮不出现下划线
  test("disabled", () => {
    const wrapper = shallowMount(
      Link,
      Object.assign(defaultSlots, {
        props: {
          disabled: true,
        },
      }),
    );
    expect(getClassesByComWrapper(wrapper).includes("hover:b-b-solid")).toBe(
      false,
    );
  });
  // 无下划线，且非禁用状态
  test("no-underline", () => {
    const wrapper = shallowMount(
      Link,
      Object.assign(defaultSlots, {
        props: {
          disabled: false,
          underline: false,
        },
      }),
    );
    expect(getClassesByComWrapper(wrapper).includes("hover:b-b-solid")).toBe(
      false,
    );
  });
});

// 测试图标
describe("icon", () => {
  test("icon", () => {
    const wrapper = shallowMount(Link, {
      slots: {
        default: "Link",
      },
      props: {
        icon: "edit",
      },
    });
    expect(
      getClassesByComWrapper(wrapper.find("i")).includes("i-ic-baseline-edit"),
    ).toBe(true);
  });
});
