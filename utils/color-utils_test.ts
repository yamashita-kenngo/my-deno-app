import { assert } from "$std/_util/asserts.ts";
import { ColorSet, getColor } from "./color-utils.ts";

const color: ColorSet = {
  text: "danger",
  background: "default",
};

Deno.test("getColor should return the correct color value", () => {
  const result = getColor(color);
  const expected = {
    text: "red-800",
    background: "gray-50",
  };
  assert(result.text === expected.text);
});
