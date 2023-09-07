import { describe, expect, test } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { getClassesByComWrapper } from "@/utils/test";
import Row from "../Row";

// 默认的模版
const defaultSlots = {
  slots: {
    default: "Default Row Text",
  },
};

// 默认内容
describe("default content", () => {
  // mount
  test("default content", () => {
    const wrapper = shallowMount(Row, defaultSlots);
    expect(wrapper.text()).toBe("Default Row Text");
    expect(getClassesByComWrapper(wrapper).includes("gap-0")).toBe(true);
    expect(getClassesByComWrapper(wrapper).includes("justify-start")).toBe(
      true,
    );
  });
});

// gutter(间隙)
describe("gutter", () => {
  test("gutter 16", () => {
    const wrapper = shallowMount(
      Row,
      Object.assign(defaultSlots, {
        props: {
          gutter: 16,
        },
      }),
    );
    expect(getClassesByComWrapper(wrapper).includes("gap-4")).toBe(true);
  });
  test("negative gutter 16", () => {
    const wrapper = shallowMount(
      Row,
      Object.assign(defaultSlots, {
        props: {
          gutter: -16,
        },
      }),
    );
    expect(getClassesByComWrapper(wrapper).includes("gap-4")).toBe(true);
  });
});

// justify(水平排列方式)
describe("justify", () => {
  test("justify center", () => {
    const wrapper = shallowMount(
      Row,
      Object.assign(defaultSlots, {
        props: {
          justify: "center",
        },
      }),
    );
    expect(getClassesByComWrapper(wrapper).includes("justify-center")).toBe(
      true,
    );
  });
  test("justify between", () => {
    const wrapper = shallowMount(
      Row,
      Object.assign(defaultSlots, {
        props: {
          justify: "between",
        },
      }),
    );
    expect(getClassesByComWrapper(wrapper).includes("justify-between")).toBe(
      true,
    );
  });
});
