import { defineComponent } from "vue";

const props = {
  span: {
    type: Number,
    default: 24,
  },
};

export default defineComponent({
  name: "GCol",
  props,
  setup(props, { slots }) {
    // 只需要整数即可
    const span = ((props.span - 1) % 24) + 1;
    const widthPercent = parseInt(`${(span / 24) * 100}`) + "%";
    return () => (
      <div
        class={`
          g-col
          g-col-${span}
          w-${widthPercent}
          box-border
        `}
      >
        {slots.default ? slots.default() : ""}
      </div>
    );
  },
});
