import { describe, expect, test } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { getClassesByComWrapper } from "@/utils/test";
import Button from "../Button";

// 默认模板
const defaultSlots = {
  slots: {
    default: "Button",
  },
};

// 测试按钮文字
describe("Button", () => {
  // mount
  test("mount @vue/test-utils", () => {
    const wrapper = shallowMount(Button, defaultSlots);
    // 断言
    expect(wrapper.text()).toBe("Button");
  });
});

// 测试颜色
describe("bg-color、color", () => {
  // 默认背景颜色(蓝色)、字体颜色为白色
  test("default", () => {
    const wrapper = shallowMount(Button, defaultSlots);
    expect(getClassesByComWrapper(wrapper).includes("bg-blue-500")).toBe(true);
    expect(getClassesByComWrapper(wrapper).includes("text-white")).toBe(true);
  });
  // 紫色背景色、悬浮色
  test("purple", () => {
    const wrapper = shallowMount(
      Button,
      Object.assign(defaultSlots, {
        props: {
          color: "purple",
        },
      }),
    );
    expect(getClassesByComWrapper(wrapper).includes("bg-purple-500")).toBe(
      true,
    );
    expect(
      getClassesByComWrapper(wrapper).includes("hover:bg-purple-400"),
    ).toBe(true);
  });
  // 朴素按钮默认背景色、文本颜色
  test("plain", () => {
    const wrapper = shallowMount(
      Button,
      Object.assign(defaultSlots, {
        props: {
          plain: true,
        },
      }),
    );
    expect(getClassesByComWrapper(wrapper).includes("bg-blue-100")).toBe(true);
    expect(getClassesByComWrapper(wrapper).includes("bg-blue-500")).toBe(false);
    expect(getClassesByComWrapper(wrapper).includes("text-blue-500")).toBe(
      true,
    );
  });
});

// 测试圆角
describe("round", () => {
  // 默认圆角
  test("default", () => {
    const wrapper = shallowMount(Button, defaultSlots);
    expect(getClassesByComWrapper(wrapper).includes("rounded-md")).toBe(true);
  });
  // 圆角
  test("round", () => {
    const wrapper = shallowMount(
      Button,
      Object.assign(defaultSlots, {
        props: {
          round: true,
        },
      }),
    );
    expect(getClassesByComWrapper(wrapper).includes("rounded-full")).toBe(true);
  });
});

// 测试是否禁用
describe("disabled", () => {
  test("default", () => {
    const wrapper = shallowMount(Button, defaultSlots);
    expect(getClassesByComWrapper(wrapper).includes("cursor-pointer")).toBe(
      true,
    );
  });
  test("disabled", () => {
    const wrapper = shallowMount(
      Button,
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

// 测试图标
describe("icon", () => {
  test("default", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
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
