import { describe, expect, test } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { getClassesByComWrapper } from "@/utils/test";
import Col from "../Col";

// 默认的模版
const defaultSlots = {
  slots: {
    default: "Default Col Content",
  },
};

// 默认内容
describe("default content", () => {
  test("default content", () => {
    const wrapper = shallowMount(Col, defaultSlots);
    expect(wrapper.text()).toBe("Default Col Content");
    expect(getClassesByComWrapper(wrapper).includes("w-100%")).toBe(true);
  });
});

// span
describe("span", () => {
  test("1 / 3", () => {
    const wrapper = shallowMount(
      Col,
      Object.assign(defaultSlots, {
        props: {
          span: 8,
        },
      }),
    );
    expect(getClassesByComWrapper(wrapper).includes("w-33%")).toBe(true);
  });
  test("1 / 4", () => {
    const wrapper = shallowMount(
      Col,
      Object.assign(defaultSlots, {
        props: {
          span: 6,
        },
      }),
    );
    expect(getClassesByComWrapper(wrapper).includes("w-25%")).toBe(true);
  });
  test("greater than 24(max)", () => {
    const wrapper = shallowMount(
      Col,
      Object.assign(defaultSlots, {
        props: {
          span: 28,
        },
      }),
    );
    expect(getClassesByComWrapper(wrapper).includes("w-16%")).toBe(true);
  });
});
