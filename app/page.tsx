import Blot from "./components/Blot";
import Form from "./components/Form";
import Help from "./components/Help";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <main className="max-w-3xl relative py-4 mx-auto">
        <h1 className="text-center mb-8 md:mb-10"> Color-genie </h1>
        <Form />
        <div className="max-w-3xl mx-auto">
          <h2 className="mt-2 md:mt-8 ml-2 light:text-transparent dark:text-transparent bg-clip-text bg-gradient-to-br from-primary-100 to-primary-900">
            Primary
          </h2>
          <section className="grid grid-cols-9 mt-2 gap-1">
            {[...Array(9)].map((_, i) => (
              <Blot key={i} color={`primary-${i + 1}00`} name={`${i + 1}00`} />
            ))}
          </section>
          <h2 className="mt-2 md:mt-4 ml-2 light:text-transparent dark:text-transparent bg-clip-text bg-gradient-to-br from-secondary-100 to-secondary-900">
            Secondary
          </h2>
          <section className="grid grid-cols-9 mt-2 gap-1">
            {[...Array(9)].map((_, i) => (
              <Blot
                key={i}
                color={`secondary-${i + 1}00`}
                name={`${i + 1}00`}
              />
            ))}
          </section>
          <h2 className="mt-2 md:mt-4 ml-2 light:text-transparent dark:text-transparent bg-clip-text bg-gradient-to-br from-tertiary-1-100 to-tertiary-1-900">
            Tertiary-1
          </h2>
          <section className="grid grid-cols-9 mt-2 gap-1">
            {[...Array(9)].map((_, i) => (
              <Blot
                key={i}
                color={`tertiary-1-${i + 1}00`}
                name={`${i + 1}00`}
              />
            ))}
          </section>
          <h2 className="mt-2 md:mt-4 ml-2 light:text-transparent dark:text-transparent bg-clip-text bg-gradient-to-br from-tertiary-2-100 to-tertiary-2-900">
            Tertiary-2
          </h2>
          <section className="grid grid-cols-9 mt-2 gap-1">
            {[...Array(9)].map((_, i) => (
              <Blot
                key={i}
                color={`tertiary-2-${i + 1}00`}
                name={`${i + 1}00`}
              />
            ))}
          </section>
          <h2 className="mt-2 md:mt-4 ml-2 light:text-transparent dark:text-transparent bg-clip-text bg-gradient-to-br from-accent-1-100 to-accent-1-900">
            Accent-1
          </h2>
          <section className="grid grid-cols-9 mt-2 gap-1">
            {[...Array(9)].map((_, i) => (
              <Blot key={i} color={`accent-1-${i + 1}00`} name={`${i + 1}00`} />
            ))}
          </section>
          <h2 className="mt-2 md:mt-4 ml-2 light:text-transparent dark:text-transparent bg-clip-text bg-gradient-to-br from-accent-2-100 to-accent-2-900">
            Accent-2
          </h2>
          <section className="grid grid-cols-9 mt-2 gap-1">
            {[...Array(9)].map((_, i) => (
              <Blot key={i} color={`accent-2-${i + 1}00`} name={`${i + 1}00`} />
            ))}
          </section>
          <h2 className="mt-2 md:mt-4 ml-2 light:text-transparent dark:text-transparent bg-clip-text bg-gradient-to-br from-accent-3-100 to-accent-3-900">
            Accent-3
          </h2>
          <section className="grid grid-cols-9 mt-2 gap-1">
            {[...Array(9)].map((_, i) => (
              <Blot key={i} color={`accent-3-${i + 1}00`} name={`${i + 1}00`} />
            ))}
          </section>
          <h2 className="mt-2 md:mt-4 ml-2 light:text-transparent dark:text-transparent bg-clip-text bg-gradient-to-br from-accent-4-100 to-accent-4-900">
            Accent-4
          </h2>
          <section className="grid grid-cols-9 mt-2 gap-1">
            {[...Array(9)].map((_, i) => (
              <Blot key={i} color={`accent-4-${i + 1}00`} name={`${i + 1}00`} />
            ))}
          </section>
          <h2 className="mt-2 md:mt-4 ml-2 light:text-transparent dark:text-transparent bg-clip-text bg-gradient-to-br from-slate-100 to-slate-900">
            Slate
          </h2>
          <section className="grid grid-cols-9 mt-2 gap-1">
            {[...Array(9)].map((_, i) => (
              <Blot key={i} color={`slate-${i + 1}00`} name={`${i + 1}00`} />
            ))}
          </section>
          <h2 className="mt-2 md:mt-4 ml-2 light:text-transparent dark:text-transparent bg-clip-text bg-gradient-to-br from-zinc-100 to-zinc-900">
            Zinc
          </h2>
          <section className="grid grid-cols-9 mt-2 gap-1">
            {[...Array(9)].map((_, i) => (
              <Blot key={i} color={`zinc-${i + 1}00`} name={`${i + 1}00`} />
            ))}
          </section>
          <h2 className="mt-2 md:mt-4 ml-2 light:text-transparent dark:text-transparent bg-clip-text bg-gradient-to-br from-stone-100 to-stone-900">
            Stone
          </h2>
          <section className="grid grid-cols-9 mt-2 gap-1">
            {[...Array(9)].map((_, i) => (
              <Blot key={i} color={`stone-${i + 1}00`} name={`${i + 1}00`} />
            ))}
          </section>
        </div>
      </main>
      <div className="max-w-3xl mx-auto">
        <section id="help" className="max-w-3xl relative py-4 mx-auto">
          <Help />
        </section>
        <Footer />
      </div>
    </>
  );
}
