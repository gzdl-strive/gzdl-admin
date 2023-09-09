import { defineComponent, PropType } from "vue";

const props = {
  color: {
    type: String as PropType<BasicColor>,
    default: "blue",
  },
  icon: {
    type: String as PropType<BasicIcon | "">,
    default: "",
  },
  size: {
    type: String as PropType<BasicSize>,
    default: "medium",
  },
  round: {
    type: Boolean,
    default: false,
  },
  plain: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
};

const size = {
  small: {
    x: "3",
    y: "1.5",
    text: "xs",
  },
  medium: {
    x: "3.5",
    y: "2",
    text: "sm",
  },
  large: {
    x: "4",
    y: "2.5",
    text: "base",
  },
};

export default defineComponent({
  name: "GButton",
  props,
  setup(props, { slots }) {
    return () => (
      <button
        class={`
          px-${size[props.size].x}
          py-${size[props.size].y}
          ${props.round ? "rounded-full" : "rounded-md"}
          bg-${props.color}-${props.plain ? "100" : "500"}
          hover:bg-${props.color}-400
          border-solid
          border-${props.color}-${props.plain ? "200" : "500"}
          text-${props.plain ? props.color + "-500" : "white"}
          text-${size[props.size].text}
          hover:text-white
          transition duration-300 ease-in-out transform
          hover:scale-101
          ${props.disabled ? "cursor-not-allowed op-50" : "cursor-pointer"}
      `}
      >
        {props.icon !== "" ? (
          <i class={`i-ic-baseline-${props.icon} p-3`} />
        ) : (
          ""
        )}
        {slots.default ? slots.default() : ""}
      </button>
    );
  },
});
