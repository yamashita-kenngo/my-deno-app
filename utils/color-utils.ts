// dangerやwarnの色をCSS用の色に変換する
// テーマカラーなど配色を変更したい場合はここを変更する

const Text = {
  danger: "red-800",
  warn: "yellow-800",
  info: "blue-800",
  success: "green-800",
  default: "gray-800",
  outline: "white",
};

const BackgroundLight = {
  danger: "red-100",
  warn: "yellow-100",
  info: "blue-100",
  success: "green-100",
  default: "gray-100",
};

const BackgroundDark = {
  danger: "red-500",
  warn: "yellow-500",
  info: "blue-500",
  success: "green-500",
  default: "gray-500",
};
export interface ColorSet {
  text: "danger" | "warn" | "info" | "success" | "default" | "outline";
  background: "danger" | "warn" | "info" | "success" | "default";
  density?: "light" | "dark";
}

export function getColor(
  color: ColorSet,
): { text: string; background: string } {
  return {
    text: Text[color.text],
    background: color.density === "dark"
      ? BackgroundDark[color.background]
      : BackgroundLight[color.background],
  };
}
