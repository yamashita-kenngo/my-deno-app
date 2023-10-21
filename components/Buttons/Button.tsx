import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { ColorSet, getColor } from "../../utils/color-utils.ts";

export function Button(
  props: JSX.HTMLAttributes<HTMLButtonElement> & { color?: ColorSet },
) {
  const colorSet = getColor(
    props.color ?? { text: "default", background: "default" },
  );
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class={`bg-${colorSet.background} text-${colorSet.text} rounded-md px-4 py-2`}
    />
  );
}
