import { defineComponent, computed } from "vue";

const props = {
  value: {},
  label: {},
  name: String,
  disabled: {
    type: Boolean,
    default: false,
  },
};

export default defineComponent({
  name: "GRadio",
  props,
  setup(props, { slots, attrs, emit }) {
    // label用于表示radio的value，固定的
    const { label } = props;
    // 判断是否使用v-model
    const ifModelValue = Reflect.has(attrs, "modelValue");
    // 设置radio的name, 多个radio根据同样的name来限制单选
    // 如果优先指定了name属性，则使用它
    const name = props.name
      ? props.name
      : ifModelValue
      ? attrs.modelValue + "-radio"
      : "";

    // radio值
    // 绑定值, 用于和label比较是否相等
    const model = computed({
      // 优先使用双向绑定的值
      get() {
        if (ifModelValue) {
          return attrs.modelValue;
        }
        return props.value;
      },
      set(value) {
        const emitEvent = Reflect.get(attrs, "onUpdate:modelValue");
        if (ifModelValue && emitEvent && typeof emitEvent === "function") {
          emitEvent(value);
        }
        emit("input", value);
      },
    });

    // radio change
    const handleChange = () => {
      emit("change", model.value);
    };

    // 展示文本
    const labelText = computed(() => {
      return slots && slots.default ? slots.default() : label;
    });

    return () => (
      <label
        class={`
          g-radio px-2
          ${model.value === label ? "text-#3273f6 font-medium" : "text-#606266"}
          ${
            props.disabled
              ? "cursor-not-allowed text-#c0c4cc"
              : "cursor-pointer"
          }
        `}
        role="radio"
      >
        {/* 按钮样式 */}
        <span
          class={`
            g-radio-input
            whitespace-nowrap
            inline-block
            relative
          `}
        >
          <span
            class={`
              g-radio__inner box-border
              inline-block w-3.5 h-3.5 bg-white v-middle
              border rounded-full
              ${
                model.value === label
                  ? "border-width-5 border-color-#3273f6"
                  : "border-color-#dcdfe6"
              }
            `}
          ></span>
          <input
            type="radio"
            class={`display-none`}
            name={name}
            value={label}
            v-model={model.value}
            onChange={handleChange}
            disabled={props.disabled}
            aria-hidden="true"
            autocomplete="off"
            tabindex={-1}
          />
        </span>
        {/* 文本样式 */}
        <span
          class={`
            g-radio-label inline-block
            v-middle
            whitespace-nowrap
            text-3.5 px-2 tracking-wide
            select-none
          `}
        >
          {labelText.value}
        </span>
      </label>
    );
  },
});
