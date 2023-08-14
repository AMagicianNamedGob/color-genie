import Blot from "./components/Blot";
import Form from "./components/Form";

export default function Home() {
  return (
    <main className="py-8 md:p-24">
      <h1 className="font-bold text-center"> Palette Genius (demo)</h1>
      <Form />
      <h2 className="ml-2 -mb-5">Primary</h2>
      <section className="grid grid-cols-1 mt-9 md:grid-cols-3 xl:grid-cols-9 gap-4">
        {[...Array(9)].map((_, i) => (
          <Blot key={i} color={`primary-${i + 1}00`} />
        ))}
      </section>
      <h2 className="mt-5 ml-2 -mb-5">Secondary</h2>
      <section className="grid grid-cols-1 mt-9 md:grid-cols-3 xl:grid-cols-9 gap-4">
        {[...Array(9)].map((_, i) => (
          <Blot key={i} color={`secondary-${i + 1}00`} />
        ))}
      </section>
      <h2 className="mt-5 ml-2 -mb-5">Accent</h2>
      <section className="grid grid-cols-1 mt-9 md:grid-cols-3 xl:grid-cols-9 gap-4">
        {[...Array(6)].map((_, i) => (
          <Blot key={i} color={`accent-${i + 1}`} />
        ))}
      </section>
    </main>
  );
}
