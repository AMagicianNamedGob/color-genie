import Blot from "./components/Blot";
import Form from "./components/Form";

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <h1 className="font-bold text-center"> Pallet Demo</h1>
      <p className="text-lg uppercase text-primary-100">to do:</p>
      <ul className="pl-2">
        <li>Add color wheel</li>
        <li className="line-through">Live update</li>
        <li className="line-through">add color range slider (and update it automatically for high/low lightness)</li>
        <li>light mode</li>
        <li>add tailwind slate, zinc, neutral</li>
        <li>add optional tailwind colors extends</li>
        <li>output for CSS and tailwind</li>
        <li>optional tertiary and quaternary colors</li>
        <li>auto-update color range slider for high/low lightness</li>
        <li>create multiple formulas to calculate colors ?? </li>
        </ul>
      <Form />
      <h2 className="mt-10 ml-2 -mb-5">Primary</h2>
      <div className="grid grid-cols-1 mt-9 md:grid-cols-3 xl:grid-cols-9 gap-4">
        {[...Array(9)].map((_, i) => (
          <Blot key={i} color={`primary-${i + 1}00`} />
        ))}
      </div>
      <h2 className="mt-10 ml-2 -mb-5">Secondary</h2>
      <div className="grid grid-cols-1 mt-9 md:grid-cols-3 xl:grid-cols-9 gap-4">
        {[...Array(9)].map((_, i) => (
          <Blot key={i} color={`secondary-${i + 1}00`} />
        ))}
      </div>
      <h2 className="mt-10 ml-2 -mb-5">Accent</h2>
      <div className="grid grid-cols-1 mt-9 md:grid-cols-3 xl:grid-cols-9 gap-4">
        {[...Array(6)].map((_, i) => (
          <Blot key={i} color={`accent-${i + 1}`} />
        ))}
      </div>
    </main>
  );
}
