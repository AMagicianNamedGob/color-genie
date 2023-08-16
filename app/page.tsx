import Blot from "./components/Blot";
import Form from "./components/Form";


export default function Home() {
  return (
    <main className="max-w-3xl relative py-8 mx-auto">

      <h1 className="text-center mb-8 md:mb-10"> Color Geni.us </h1>
      <Form />
      <div className="max-w-3xl mx-auto">
        <h2 className="mt-2 md:mt-8 ml-2 light:text-transparent dark:text-transparent bg-clip-text bg-gradient-to-br from-primary-100 to-primary-900">Primary</h2>
        <section className="grid grid-cols-9 mt-2 gap-1">
          {[...Array(9)].map((_, i) => (
            <Blot key={i} color={`primary-${i + 1}00`} name={`${i + 1}00`} />
          ))}
        </section>
        <h2 className="mt-2 md:mt-4 ml-2 light:text-transparent dark:text-transparent bg-clip-text bg-gradient-to-br from-secondary-100 to-secondary-900">Secondary</h2>
        <section className="grid grid-cols-9 mt-2 gap-1">
          {[...Array(9)].map((_, i) => (
            <Blot key={i} color={`secondary-${i + 1}00`} name={`${i + 1}00`} />
          ))}
        </section>
        <h2 className="mt-2 md:mt-4 ml-2 light:text-transparent dark:text-transparent bg-clip-text bg-gradient-to-br from-tertiary-100 to-tertiary-900">Tertiary</h2>
        <section className="grid grid-cols-9 mt-2 gap-1">
          {[...Array(9)].map((_, i) => (
            <Blot key={i} color={`tertiary-${i + 1}00`} name={`${i + 1}00`} />
          ))}
        </section>
        <h2 className="mt-2 md:mt-4 ml-2 light:text-transparent dark:text-transparent bg-clip-text bg-gradient-to-br from-contrast-100 to-contrast-900">Contrast</h2>
        <section className="grid grid-cols-9 mt-2 gap-1">
          {[...Array(9)].map((_, i) => (
            <Blot key={i} color={`contrast-${i + 1}00`} name={`${i + 1}00`} />
          ))}
        </section>
        <h2 className="mt-2 md:mt-4 ml-2 light:text-transparent dark:text-transparent bg-clip-text bg-gradient-to-br from-accent-1-100 to-accent-1-900">Accent-1</h2>
        <section className="grid grid-cols-9 mt-2 gap-1">
          {[...Array(9)].map((_, i) => (
            <Blot key={i} color={`accent-1-${i + 1}00`} name={`${i + 1}00`} />
          ))}
        </section>
        <h2 className="mt-2 md:mt-4 ml-2 light:text-transparent dark:text-transparent bg-clip-text bg-gradient-to-br from-accent-2-100 to-accent-2-900">Accent-2</h2>
        <section className="grid grid-cols-9 mt-2 gap-1">
          {[...Array(9)].map((_, i) => (
            <Blot key={i} color={`accent-2-${i + 1}00`} name={`${i + 1}00`} />
          ))}
        </section>
      </div>
    </main>
  );
}
