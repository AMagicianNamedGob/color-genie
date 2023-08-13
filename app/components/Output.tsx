import { Highlighter } from "rc-highlight";
import getStyleConfig from "../lib/getConfigs";

interface OutputProps {
  submitted: boolean;
  hsl: { h: string | number; s: string | number; l: string | number };
  colorRange: string | number;
  tailwindSelected?: boolean;
}

export default function Output({
  submitted = false,
  hsl,
  tailwindSelected = false,
  colorRange,
}: OutputProps) {
  if (!submitted) return null;

  const css = getStyleConfig(hsl, tailwindSelected, colorRange);
  const tailwindConfig = getStyleConfig(hsl, tailwindSelected, colorRange);

  return (
    <>
      <section>
        <h2>{tailwindSelected ? "Tailwind Config" : "CSS"}</h2>

        {!tailwindSelected && (
          <div className="flex flex-col py-3">
            <div className="w-md overflow-auto h-80 ">
              <Highlighter code={css}>{css}</Highlighter>
            </div>
          </div>
        )}

        {tailwindSelected && (
          <div className="flex flex-col py-3">
            <div className="w-md overflow-auto h-80 ">
              <Highlighter code={tailwindConfig}>{tailwindConfig}</Highlighter>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
