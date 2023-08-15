import { Highlighter } from "rc-highlight";
import getStyleConfig from "../lib/getConfigs";

interface OutputProps {
  submitted: boolean;
  hsl: { h: string | number; s: string | number; l: string | number };
  lRange: string | number;
  hRange: string | number;
  sRange: string | number;

  tailwindSelected?: boolean;
}

export default function Output({
  submitted = false,
  hsl,
  tailwindSelected = false,
  lRange,
  hRange,
  sRange
}: OutputProps) {
  if (!submitted) return null;

  const css = getStyleConfig(hsl, tailwindSelected, {lr: lRange, hr: hRange, sr: sRange});
  const tailwindConfig = getStyleConfig(hsl, tailwindSelected, {lr: lRange, hr: hRange, sr: sRange});

  return (
    <>
      <section>
        {!tailwindSelected ? (
          <Highlighter code={css}>{css}</Highlighter>
        ) : (
          <Highlighter code={tailwindConfig}>{tailwindConfig}</Highlighter>
        )}
      </section>
    </>
  );
}
