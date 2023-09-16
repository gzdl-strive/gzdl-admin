import { defineComponent, ref, PropType, computed } from "vue";

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
  min: {
    type: Number,
    default: -Infinity,
  },
  max: {
    type: Number,
    default: Infinity,
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
      let specVal = val;
      if (typeof val === "number" && (val > props.max || val < props.min)) {
        val > props.max && (specVal = props.max);
        val < props.min && (specVal = props.min);
      }
      const emitEvent = Reflect.get(attrs, "onUpdate:modelValue");
      if (emitEvent && typeof emitEvent === "function") {
        emitEvent(specVal);
      }
      inputValue.value = specVal;
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
    // 禁用状态
    const disabled = computed(() => {
      const isNum = typeof inputValue.value === "number";
      return {
        input: props.disabled,
        minus: props.disabled || (isNum && inputValue.value <= props.min),
        plus: props.disabled || (isNum && inputValue.value >= props.max),
      };
    });
    // 初始化运行一次, 如果一开始小于/大于 min/max值，就需要设置为min/max
    const init = () => {
      const isNum = typeof inputValue.value === "number";
      isNum && inputValue.value <= props.min && updateValue(props.min);
      isNum && inputValue.value >= props.max && updateValue(props.max);
    };
    init();

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
                g-input-number__decrease order-1
                box-border 
                h-${size[props.size] || 10}
                leading-${size[props.size] || 10}
                w-${size[props.size] || 10}
                text-center text-#c0c4cc bg-#f5f7fa
                border border-r-#dcdfe6 rounded-l-md
                select-none
                ${
                  disabled.value.minus
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
                g-input-number__increase order-2
                box-border 
                h-${size[props.size] || 10} leading-${size[props.size] || 10}
                w-${size[props.size] || 10}
                text-center text-#c0c4cc bg-#f5f7fa
                border border-l-#dcdfe6 rounded-r-md
                select-none
                ${
                  disabled.value.plus
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
            g-input-number-main box-border
            flex-1 order-1
            h-${size[props.size] || 10}
            w-100% line-height-10 px-3
            b-solid b-1 b-#dcdfe6
            ${
              disabled.value.input
                ? "cursor-not-allowed bg-#f5f7fa text-#c0c4cc"
                : ""
            }
          `}
          placeholder={props.placeholder}
          onInput={handleInput}
          onChange={handleInputChange}
          disabled={disabled.value.input}
        />
      </div>
    );
  },
});
