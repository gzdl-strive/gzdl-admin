import { defineComponent, PropType } from "vue";

const props = {
  gutter: {
    type: Number,
    default: 0,
  },
  justify: {
    type: String as PropType<BasicJustify>,
    default: "start",
  },
};

export default defineComponent({
  name: "GRow",
  props,
  setup(props, { slots }) {
    const gapNum = Math.abs(Math.floor(props.gutter / 4));
    return () => (
      <div
        class={`
          g-row
          flex
          flex-wrap
          gap-${gapNum}
          justify-${props.justify}
          box-border
        `}
      >
        {slots.default ? slots.default() : ""}
      </div>
    );
  },
});
