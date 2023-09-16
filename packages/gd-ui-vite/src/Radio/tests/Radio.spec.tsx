import { ref } from "vue";
import { describe, test, expect } from "vitest";
import { mount, shallowMount } from "@vue/test-utils";
import { getClassesByComWrapper } from "@/utils/test";
import Radio from "../Radio";

const defaultSlots = {
  slots: {
    default: "选项1",
  },
};

// 默认
describe("create", () => {
  test("easy create", async () => {
    const radio = ref("111");
    const wrapper = mount(() => <Radio value={radio} label="选项1" />);
    expect(wrapper.classes()).toContain("g-radio");
  });
});

// label属性
describe("label", () => {
  test("label show text when no slots text", () => {
    const wrapper = shallowMount(Radio, {
      props: {
        label: "选项值",
      },
    });
    expect(wrapper.get(".g-radio-label").text()).toBe("选项值");
    expect(wrapper.get("input").element.value).toBe("选项值");
  });
});

// disabled属性
describe("disabled", () => {
  test("disabled true", () => {
    const wrapper = shallowMount(
      Radio,
      Object.assign(defaultSlots, {
        props: {
          disabled: true,
        },
      }),
    );
    expect(getClassesByComWrapper(wrapper).includes("cursor-not-allowed")).toBe(
      true,
    );
  });
});
