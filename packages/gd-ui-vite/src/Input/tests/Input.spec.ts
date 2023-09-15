import { describe, test, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { getClassesByComWrapper } from "@/utils/test";
import Input from "../Input";

const commonSlots = {
  props: {
    placeholder: "用户名",
  },
};

// 测试Input默认
// 默认placeholder为"请输入"
describe("Input", () => {
  // mount
  test("default(no attributes added)", () => {
    const wrapper = shallowMount(Input);
    expect(wrapper.props("placeholder")).toBe("请输入");
  });
});

// 测试各项API
// type
describe("type", () => {
  // 默认应该为text
  test("default type(should be text)", () => {
    const wrapper = shallowMount(Input, commonSlots);
    expect(wrapper.props("type")).toBe("text");
    // 而且不该存在textarea元素
    expect(wrapper.find("textarea").exists()).toBe(false);
  });
  // hidden
  test("hidden(should be hidden)", () => {
    const wrapper = shallowMount(Input, {
      props: {
        type: "hidden",
      },
    });
    // 通过v-show控制的节点，如果为false，那么会添加行内样式style="display: none;"
    // expect(wrapper.find("textarea").element);
    expect(wrapper.attributes("style").includes("display: none")).toBe(true);
  });
  // textarea
  test("textarea(should be textarea to show)", () => {
    const wrapper = shallowMount(Input, {
      props: {
        type: "textarea",
      },
    });
    const curstomWrapper = shallowMount(Input, {
      props: {
        type: "textarea",
        rows: 3,
        maxLength: 30,
      },
    });
    const textarea = wrapper.find("textarea");
    // 存在textrea元素
    expect(wrapper.exists()).toBe(true);
    expect(getClassesByComWrapper(textarea).includes("g-input-textarea")).toBe(
      true,
    );
    // 默认行为2行
    expect(wrapper.props("rows")).toBe(2);
    expect(curstomWrapper.props("rows")).toBe(3);
    // 默认不存在最大长度，我在设定时给定为负值，让他失效
    expect(wrapper.props("maxLength")).toBeLessThan(0);
    expect(curstomWrapper.props("maxLength")).toBe(30);
  });
});

// disabled
describe("disabled", () => {
  const wrapper = shallowMount(Input, commonSlots);
  const disabledWrapper = shallowMount(Input, {
    props: {
      placeholder: "用户名",
      disabled: true,
    },
  });
  test("input exsist", () => {
    expect(wrapper.exists()).toBe(true);
    expect(disabledWrapper.exists()).toBe(true);
  });
  const classes = getClassesByComWrapper(wrapper.find("input"));
  const disabledClasses = getClassesByComWrapper(disabledWrapper.find("input"));
  test("default", () => {
    expect(classes.includes("cursor-pointer")).toBe(true);
    expect(classes.includes("cursor-not-allowed")).toBe(false);
  });
  test("disabled", () => {
    expect(disabledClasses.includes("cursor-not-allowed")).toBe(true);
  });
});

// readonly
describe("readonly", () => {
  const wrapper = shallowMount(Input, commonSlots);
  const readonlyWrapper = shallowMount(Input, {
    props: {
      placeholder: "用户名",
      readonly: true,
    },
  });
  test("readonly exists", () => {
    expect(wrapper.exists()).toBe(true);
    expect(readonlyWrapper.exists()).toBe(true);
  });
  test("default", () => {
    expect(wrapper.props("readonly")).toBe(false);
  });
  test("readonly", () => {
    expect(readonlyWrapper.props("readonly")).toBe(true);
  });
});

// clearable
describe("clearable", () => {
  const wrapper = shallowMount(Input, {
    props: {
      clearable: true,
    },
  });
  test("click clearable", async () => {
    await wrapper.get("input").setValue("123");
    expect(wrapper.get("input").element.value).toBe("123");
    // 点击清除
    await wrapper.get(".g-input-clearable").trigger("click");
    expect(wrapper.get("input").element.value).toEqual("");
  });
});

// size
describe("size", () => {
  const wrapper = shallowMount(Input);
  const smallWrapper = shallowMount(Input, {
    props: {
      size: "small",
    },
  });
  const input = wrapper.find("input");
  const smallInput = smallWrapper.find("input");
  expect(input.exists()).toBe(true);
  expect(smallInput.exists()).toBe(true);
  test("default", () => {
    expect(getClassesByComWrapper(input).includes("h-10")).toBe(true);
  });
  test("small", () => {
    expect(getClassesByComWrapper(smallInput).includes("h-8")).toBe(true);
  });
});

// show-pwd
describe("show-pwd", () => {
  const wrapper = shallowMount(Input, {
    props: {
      showPassword: true,
    },
  });
  test("password", async () => {
    const inputElement = wrapper.find("input");
    const showPwdIcon = wrapper.find(".g-input-pwd");
    expect(showPwdIcon.exists()).toBe(true);
    expect(inputElement.attributes("type")).toBe("password");
    expect(wrapper.get(".i-mdi-eye-outline"));
    await showPwdIcon.trigger("click");
    expect(inputElement.attributes("type")).toBe("text");
    expect(wrapper.get(".i-mdi-eye-off-outline"));
  });
});

// limit-word
// disabled为false、showWordLimit为true、maxLength > 0三个条件必须同时满足才会显示
describe("limit-word", () => {
  const props = {
    showWordLimit: true,
  };
  test("no maxlength will hidden", () => {
    const wrapper = shallowMount(Input, {
      props,
    });
    expect(wrapper.find(".g-input-limit").exists()).toBe(false);
  });
  test("with maxlength will show", () => {
    const wrapper = shallowMount(Input, {
      props: Object.assign(props, {
        maxLength: 10,
      }),
    });
    expect(wrapper.find(".g-input-limit").exists()).toBe(true);
  });
  test("disabled will hidden(even if you have maxlength and showWordLimit)", () => {
    const wrapper = shallowMount(Input, {
      props: Object.assign({
        maxLength: 10,
        disabled: true,
      }),
    });
    expect(wrapper.find(".g-input-limit").exists()).toBe(false);
  });
});
