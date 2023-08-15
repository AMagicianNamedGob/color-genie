import Blot from "./components/Blot";
import Form from "./components/Form";


export default function Home() {
  return (
    <main className="max-w-3xl relative py-8 mx-auto">

      <h1 className="font-bold text-center"> Palette Genius (demo)</h1>
      <Form />
      <div className="max-w-3xl mx-auto">
        <h2 className="ml-2 -mb-5">Primary</h2>
        <section className="grid grid-cols-9 mt-9 md:grid-cols-9 gap-1">
          {[...Array(9)].map((_, i) => (
            <Blot key={i} color={`primary-${i + 1}00`} name={`${i + 1}00`} />
          ))}
        </section>
        <h2 className="mt-5 ml-2 -mb-5">Secondary</h2>
        <section className="grid grid-cols-9 mt-9 md:grid-cols-9 gap-1">
          {[...Array(9)].map((_, i) => (
            <Blot key={i} color={`secondary-${i + 1}00`} name={`${i + 1}00`} />
          ))}
        </section>
        <h2 className="mt-5 ml-2 -mb-5">Tertiary</h2>
        <section className="grid grid-cols-9 mt-9 md:grid-cols-9 gap-1">
          {[...Array(9)].map((_, i) => (
            <Blot key={i} color={`tertiary-${i + 1}00`} name={`${i + 1}00`} />
          ))}
        </section>
        <h2 className="mt-5 ml-2 -mb-5">Contrast</h2>
        <section className="grid grid-cols-9 mt-9 md:grid-cols-9 gap-1">
          {[...Array(9)].map((_, i) => (
            <Blot key={i} color={`contrast-${i + 1}00`} name={`${i + 1}00`} />
          ))}
        </section>
        <h2 className="mt-5 ml-2 -mb-5">Accent-1</h2>
        <section className="grid grid-cols-9 mt-9 md:grid-cols-9 gap-1">
          {[...Array(9)].map((_, i) => (
            <Blot key={i} color={`accent-1-${i + 1}00`} name={`${i + 1}00`} />
          ))}
        </section>
        <h2 className="mt-5 ml-2 -mb-5">Accent-2</h2>
        <section className="grid grid-cols-9 mt-9 md:grid-cols-9 gap-1">
          {[...Array(9)].map((_, i) => (
            <Blot key={i} color={`accent-2-${i + 1}00`} name={`${i + 1}00`} />
          ))}
        </section>
      </div>
    </main>
  );
}
