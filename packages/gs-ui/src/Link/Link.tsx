import { defineComponent, PropType } from "vue";

const props = {
  color: {
    type: String as PropType<BasicColor>,
    default: "",
  },
  icon: {
    type: String as PropType<BasicIcon | "">,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  href: {
    type: String,
    default: "javascript:void(0);",
  },
  underline: {
    type: Boolean,
    default: true,
  },
};

export default defineComponent({
  name: "GLink",
  props,
  setup(props, { slots }) {
    return () => (
      <a
        href={props.href}
        class={`
          ${props.color ? "text-" + props.color + "-500" : "text-black"}
          ${
            props.color
              ? "hover:text-" + props.color + "-400"
              : "hover:text-blue-500"
          }
          decoration-none
          hover:decoration-none
          ${props.disabled ? "cursor-not-allowed op-50" : "cursor-pointer"}
          ${!props.disabled && props.underline ? "hover:b-b-solid" : ""}
        `}
      >
        {props.icon !== "" ? (
          <i class={`i-ic-baseline-${props.icon} p-2.5 mr-1`} />
        ) : (
          ""
        )}
        <span>{slots.default ? slots.default() : ""}</span>
      </a>
    );
  },
});
