import type { Signal } from "@preact/signals";
import { Button } from "../components/Buttons/Button.tsx";
import { Alert } from "../components/Alerts/Alert.tsx";
import { ColorSet } from "../utils/color-utils.ts";

interface CounterProps {
  count: Signal<number>;
}

export default function Counter(props: CounterProps) {
  const buttonStyle: ColorSet = {
    text: "outline",
    background: "danger",
    density: "dark",
  };
  return (
    <div class="flex gap-8 py-6">
      <Alert color={{ text: "danger", background: "danger" }}>
        <span class="font-bold">Danger!</span> This is a danger alert—check it
      </Alert>
      <Button onClick={() => props.count.value -= 1} color={buttonStyle}>
        -1
      </Button>
      <p class="text-3xl">{props.count}</p>
      <Button onClick={() => props.count.value += 1}>+1</Button>
    </div>
  );
}
