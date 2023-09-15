import { describe, test, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { getClassesByComWrapper } from "@/utils/test";
import InputNumber from "../InputNumber";

const commonProps = {
  placeholder: "大小",
};

// 默认
describe("default", () => {
  test("basic", () => {
    const wrapper = shallowMount(InputNumber);
    expect(wrapper.props("placeholder")).toBe("请输入数字");
  });
});

// 控制按钮
describe("controls", () => {
  test("default", () => {
    const wrapper = shallowMount(InputNumber, {
      props: commonProps,
    });
    expect(wrapper.props("controls")).toBe(true);
    expect(wrapper.get(".g-input-number__decrease"));
    expect(wrapper.get(".g-input-number__increase"));
  });
  test("no controls button", () => {
    const wrapper = shallowMount(InputNumber, {
      props: {
        placeholder: "大小",
        controls: false,
      },
    });
    expect(wrapper.find(".g-input-number__decrease").exists()).toBe(false);
    expect(wrapper.find(".g-input-number__increase").exists()).toBe(false);
  });
});

// 尺寸
describe("size", () => {
  test("three size of the input-number", () => {
    const wrapper = shallowMount(InputNumber, {
      props: commonProps,
    });
    const smallWrapper = shallowMount(InputNumber, {
      props: Object.assign(commonProps, {
        size: "small",
      }),
    });
    const largeWrapper = shallowMount(InputNumber, {
      props: Object.assign(commonProps, {
        size: "large",
      }),
    });
    expect(
      getClassesByComWrapper(
        smallWrapper.find(".g-input-number__increase"),
      ).includes("h-8"),
    ).toBe(true);
    expect(
      getClassesByComWrapper(
        wrapper.find(".g-input-number__increase"),
      ).includes("h-10"),
    ).toBe(true);
    expect(
      getClassesByComWrapper(
        largeWrapper.find(".g-input-number__increase"),
      ).includes("h-12"),
    ).toBe(true);
  });
});

// min/max
describe("min/max", () => {
  const wrapper = shallowMount(InputNumber, {
    props: {
      min: 1,
      max: 5,
      step: 2,
    },
  });
  test("less than min or more than max will limited [min, max]", async () => {
    // min:1, value: 0 => limit => 1
    await wrapper.get("input").setValue("0");
    expect(wrapper.get("input").element.value).toBe(1);
    // max:5, value: 1999 => limit => 5
    await wrapper.get("input").setValue("1999");
    expect(wrapper.get("input").element.value).toBe(5);
    // value: 5, 点击plus => 还是5
    await wrapper.get(".g-input-number__increase").trigger("click");
    expect(wrapper.get("input").element.value).toBe(5);
    // value: 5 - 2 = 3
    await wrapper.get(".g-input-number__decrease").trigger("click");
    // value: 3 - 2 = 1
    await wrapper.get(".g-input-number__decrease").trigger("click");
    // value: 1 - 2 = -1 < min => limit => 1
    await wrapper.get(".g-input-number__decrease").trigger("click");
    expect(wrapper.get("input").element.value).toBe(1);
  });
});

// step
describe("step", () => {
  // 默认 step 1
  test("default", async () => {
    const wrapper = shallowMount(InputNumber, {
      props: commonProps,
    });
    // value: 1
    await wrapper.get("input").setValue("1");
    expect(wrapper.get("input").element.value).toBe(1);
    // value: 1 => increase + step => 2
    await wrapper.get(".g-input-number__increase").trigger("click");
    expect(wrapper.get("input").element.value).toBe(2);
    // value: 2 => descrease - step => 1
    await wrapper.get(".g-input-number__decrease").trigger("click");
    expect(wrapper.get("input").element.value).toBe(1);
  });
  test("step 3", async () => {
    const wrapper = shallowMount(InputNumber, {
      props: Object.assign(commonProps, {
        step: 3,
      }),
    });
    // value: 10
    await wrapper.get("input").setValue("10");
    // value: 10 - 3 - 3 = 4
    await wrapper.get(".g-input-number__decrease").trigger("click");
    await wrapper.get(".g-input-number__decrease").trigger("click");
    expect(wrapper.get("input").element.value).toBe(4);
  });
});

// disabled
describe("disabled", () => {
  // 默认 step 1
  test("disabled true", () => {
    const wrapper = shallowMount(InputNumber, {
      props: Object.assign(commonProps, {
        disabled: true,
      }),
    });
    expect(
      getClassesByComWrapper(wrapper.find("input")).includes(
        "cursor-not-allowed",
      ),
    ).toBe(true);
    expect(
      getClassesByComWrapper(
        wrapper.find(".g-input-number__decrease"),
      ).includes("cursor-not-allowed"),
    ).toBe(true);
    expect(
      getClassesByComWrapper(
        wrapper.find(".g-input-number__increase"),
      ).includes("cursor-not-allowed"),
    ).toBe(true);
  });
  // 当disabled为false, 计数器值等于边界值时，控制按钮会被禁用
  test("disabled false but value equals boundary value", async () => {
    const wrapper = shallowMount(InputNumber, {
      props: {
        min: 1,
        max: 5,
        step: 2,
      },
    });
    await wrapper.get("input").setValue("3");
    await wrapper.get(".g-input-number__decrease").trigger("click");
    // value: 3 - 2 = 1
    expect(wrapper.get("input").element.value).toBe(1);
    // value: 1 === min => minus button disabled, but plus button normal
    expect(
      getClassesByComWrapper(
        wrapper.find(".g-input-number__decrease"),
      ).includes("cursor-not-allowed"),
    ).toBe(true);
    expect(
      getClassesByComWrapper(
        wrapper.find(".g-input-number__increase"),
      ).includes("cursor-not-allowed"),
    ).toBe(false);
    // value: 1 + 2 = 3
    await wrapper.get(".g-input-number__increase").trigger("click");
    // value: 3 + 2 = 5
    await wrapper.get(".g-input-number__increase").trigger("click");
    expect(wrapper.get("input").element.value).toBe(5);
    // value: 5 === max => minus button normal, plus button disabled
    expect(
      getClassesByComWrapper(
        wrapper.find(".g-input-number__increase"),
      ).includes("cursor-not-allowed"),
    ).toBe(true);
    expect(
      getClassesByComWrapper(
        wrapper.find(".g-input-number__decrease"),
      ).includes("cursor-not-allowed"),
    ).toBe(false);
  });
});

// non number
describe("non number", () => {
  test("test non number", async () => {
    const wrapper = shallowMount(InputNumber, {
      props: {
        size: "medium",
      },
    });
    await wrapper.get("input").setValue("1");
    expect(wrapper.get("input").element.value).toEqual(1);
    await wrapper.get("input").setValue("abc");
    await wrapper.get("input").trigger("change");
    expect(wrapper.get("input").element.value).toEqual(0);
  });
});
