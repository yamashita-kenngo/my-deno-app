import { JSX } from "preact";
import { ColorSet, getColor } from "../../utils/color-utils.ts";

export function Alert(
  props: JSX.HTMLAttributes<HTMLDivElement> & { color?: ColorSet },
) {
  const colorSet = getColor(
    props.color ?? { text: "default", background: "default", density: "light" },
  );
  return (
    <div
      {...props}
      class={`bg-${colorSet.background} text-${colorSet.text} rounded-md p-4 mb-4  rounded-lg`}
    />
  );
}
