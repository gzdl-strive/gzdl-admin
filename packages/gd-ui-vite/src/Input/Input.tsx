import { defineComponent, ref, computed, reactive, PropType } from "vue";

const props = {
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "请输入",
  },
  size: {
    type: String as PropType<BasicSize>,
    default: "medium",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  showPassword: {
    type: Boolean,
    default: false,
  },
  rows: {
    type: Number,
    default: 2,
  },
  maxLength: {
    type: Number,
    default: -1,
  },
  showWordLimit: {
    type: Boolean,
    default: false,
  },
};

const size = {
  small: {
    text: "xs",
    h: 8,
  },
  medium: {
    text: "sm",
    h: 10,
  },
  large: {
    text: "base",
    h: 12,
  },
};

export default defineComponent({
  name: "GInput",
  props,
  setup(props, { attrs }) {
    const { type } = props;
    const inputValue = ref<string>(
      attrs?.modelValue ? (attrs.modelValue as string) : "",
    );
    const hovering = ref(false);
    const isFocus = ref(false);
    const showPwd = reactive({
      show: props.showPassword,
      status: false,
    });
    // input输入事件
    const handleInput = (e) => {
      const val = e.target.value;
      const emitEvent = Reflect.get(attrs, "onUpdate:modelValue");
      if (emitEvent && typeof emitEvent === "function") {
        emitEvent(val);
      }
      inputValue.value = val;
    };
    // 是否展示清空
    //******* 密码框不能清空
    const showClear = computed(() => {
      // 非文本域需要判断是否是密码框
      // 文本域下无论是否密码框都应该展示清空
      const textareaShowClear =
        props.type === "textarea" ? true : !props.showPassword;
      return (
        props.clearable &&
        !props.disabled &&
        !props.readonly &&
        textareaShowClear &&
        inputValue.value &&
        (hovering.value || isFocus.value)
      );
    });
    // 清空
    const handleClear = () => {
      const emitEvent = Reflect.get(attrs, "onUpdate:modelValue");
      if (emitEvent && typeof emitEvent === "function") {
        emitEvent("");
      }
      inputValue.value = "";
    };
    // 密码框密码展示切换
    const switchPwdStatus = () => {
      showPwd.status = !showPwd.status;
    };
    const showWordLimitVisible = computed(
      () => !props.disabled && props.maxLength > 0 && props.showWordLimit,
    );

    return () => (
      <div
        v-show={type !== "hidden"}
        class="
          w-100%
          inline-block
          position-relative"
        onMouseenter={() => (hovering.value = true)}
        onMouseleave={() => (hovering.value = false)}
      >
        {type !== "textarea" ? (
          <>
            <input
              type={showPwd.show && !showPwd.status ? "password" : "text"}
              value={inputValue.value}
              onInput={handleInput}
              onFocus={() => (isFocus.value = true)}
              onBlur={() => (isFocus.value = false)}
              readonly={props.readonly}
              class={`
                g-input
                box-border inline-block
                w-100% 
                h-${size[props.size].h || 10}
                line-height-${size[props.size].h || 10}
                b-solid b-1 b-#dcdfe6 b-rounded
                font-size-inherit
                px-3 py-2
                ${
                  props.disabled
                    ? "cursor-not-allowed bg-#f5f7fa text-#c0c4cc"
                    : "cursor-pointer bg-#fff text-#606266"
                }
              `}
              placeholder={props.placeholder}
              disabled={props.disabled}
              maxlength={props.maxLength}
            />
            <div
              v-show={showPwd.show}
              class="
                g-input-pwd
                position-absolute right-2 top-50% translate-y--1/2
                cursor-pointer
                select-none
                hover:text-#4b9ae9 transition duration-300 ease-in-out
              "
              onClick={switchPwdStatus}
            >
              {showPwd.status ? (
                <i class="i-mdi-eye-off-outline p-2" />
              ) : (
                <i class="i-mdi-eye-outline p-2" />
              )}
            </div>
          </>
        ) : (
          <>
            <textarea
              onFocus={() => (isFocus.value = true)}
              onBlur={() => (isFocus.value = false)}
              value={inputValue.value}
              onInput={handleInput}
              class={`
                g-input g-input-textarea
                box-border inline-block w-100%
                b-solid b-1 b-#dcdfe6 b-rounded
                font-size-inherit
                px-3 py-2
                ${
                  props.disabled
                    ? "cursor-not-allowed bg-#f5f7fa text-#c0c4cc"
                    : "cursor-pointer bg-#fff text-#606266"
                }
              `}
              rows={props.rows}
              disabled={props.disabled}
              placeholder={props.placeholder}
              maxlength={props.maxLength}
            />
          </>
        )}
        <div
          v-show={showClear.value}
          class="
            g-input-clearable
            position-absolute right-2 top-50% translate-y--1/2
            cursor-pointer
          "
          onClick={handleClear}
        >
          <i class="i-ic-baseline-close p-2 hover:text-#f00 transition duration-300 ease-in-out" />
        </div>
        {showWordLimitVisible.value ? (
          <div
            class="
              g-input-limit
              position-absolute right-2 bottom-0 translate-y--3/4
              text-1 text-#909399
              cursor-pointer
            "
          >
            {inputValue.value.length} / {props.maxLength}
          </div>
        ) : (
          ""
        )}
      </div>
    );
  },
});
