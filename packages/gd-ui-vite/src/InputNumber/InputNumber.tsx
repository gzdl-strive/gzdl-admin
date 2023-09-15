import { defineComponent, ref, PropType } from "vue";

const props = {
  controls: {
    type: Boolean,
    default: true,
  },
  placeholder: {
    type: String,
    default: "请输入数字",
  },
  step: {
    type: Number,
    default: 1,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String as PropType<BasicSize>,
    default: "medium",
  },
};

const size = {
  small: 8,
  medium: 10,
  large: 12,
};

export default defineComponent({
  name: "GInputNumber",
  props,
  setup(props, { attrs }) {
    const inputValue = ref<number>(
      attrs?.modelValue ? Number(attrs.modelValue) : undefined,
    );
    // 修改数值
    const updateValue = (val: number | undefined) => {
      const emitEvent = Reflect.get(attrs, "onUpdate:modelValue");
      if (emitEvent && typeof emitEvent === "function") {
        emitEvent(val);
      }
      inputValue.value = val;
    };
    // input输入事件
    const handleInput = (e) => {
      const val = e.target.value;
      updateValue(val);
    };
    // change事件
    const handleInputChange = (e) => {
      const val = Number(e.target.value);
      const newVal = isNaN(val) ? undefined : val;
      updateValue(newVal);
    };
    // minus
    const handleMinus = () => {
      if (props.disabled) return;
      const val = inputValue.value;
      if (val !== undefined) {
        const newVal = val - props.step;
        updateValue(newVal);
      }
    };
    // plus
    const handlePlus = () => {
      if (props.disabled) return;
      const val = inputValue.value;
      if (val !== undefined) {
        const newVal = val + props.step;
        updateValue(newVal);
      }
    };

    return () => (
      <div
        class={`
          g-input-number
          w-50 inline-flex items-center
        `}
      >
        {props.controls ? (
          <>
            <span
              class={`
                g-input-number__decrease
                order-1
                box-border 
                h-${size[props.size] || 10}
                leading-${size[props.size] || 10}
                w-${size[props.size] || 10}
                text-center text-#c0c4cc bg-#f5f7fa
                border border-r-#dcdfe6 rounded-l-md
                select-none
                ${
                  props.disabled
                    ? "cursor-not-allowed bg-#f5f7fa text-#c0c4cc"
                    : "hover:text-#409eff"
                }
              `}
              role="button"
              onClick={handleMinus}
            >
              <i class="i-ic-baseline-minus p-2.5"></i>
            </span>
            <span
              class={`
                g-input-number__increase
                order-2
                box-border 
                h-${size[props.size] || 10}
                leading-${size[props.size] || 10}
                w-${size[props.size] || 10}
                text-center text-#c0c4cc bg-#f5f7fa
                border border-l-#dcdfe6 rounded-r-md
                select-none
                ${
                  props.disabled
                    ? "cursor-not-allowed bg-#f5f7fa text-#c0c4cc"
                    : "hover:text-#409eff"
                }
              `}
              role="button"
              onClick={handlePlus}
            >
              <i class="i-ic-baseline-plus p-3"></i>
            </span>
          </>
        ) : (
          ""
        )}
        <input
          type="text"
          value={inputValue.value}
          class={`
            box-border
            flex-1 order-1
            h-${size[props.size] || 10}
            w-100% line-height-10 px-3
            b-solid b-1 b-#dcdfe6
            ${
              props.disabled ? "cursor-not-allowed bg-#f5f7fa text-#c0c4cc" : ""
            }
          `}
          placeholder={props.placeholder}
          onInput={handleInput}
          onChange={handleInputChange}
          disabled={props.disabled}
        />
      </div>
    );
  },
});
