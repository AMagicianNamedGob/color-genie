import { Highlighter } from "rc-highlight";
import getStyleConfig from "../lib/getConfigs";

interface OutputProps {
  submitted: boolean;
  hsl: { h: string | number; s: string | number; l: string | number };
  lRange: string | number;
  tailwindSelected?: boolean;
}

export default function Output({
  submitted = false,
  hsl,
  tailwindSelected = false,
  lRange,
}: OutputProps) {
  if (!submitted) return null;

  const css = getStyleConfig(hsl, tailwindSelected, lRange);
  const tailwindConfig = getStyleConfig(hsl, tailwindSelected, lRange);

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
