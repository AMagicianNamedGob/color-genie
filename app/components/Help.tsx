export default function Help() {
  return (
    <>
      <h2 id="help" className="h1 text-center mt-24 mb-4">
        How Do I Use This?
      </h2>
      <div className="text-lg leading-8 mt-8 mb-10">
        Easily input a hexadecimal color code into the field and click the
        'generate code' button. You can also utilize the paintbrush icon to
        access the color picker and make your selection. The gear icon serves to
        refine the palette, especially when dealing with intense bright or dark
        base colors. After creating your palette, conveniently copy the CSS code
        to your clipboard for seamless integration into your own stylesheet. For
        users of Tailwind CSS, there's an option to <a href="https://tailwindcss.com/docs/customizing-colors#using-custom-colors"> incorporate custom colors into your Tailwind configuration</a>.
      </div>
      <div className="text-lg leading-8 mt-3">
        The generated code includes a variety of grey ranges, to enhance your upcoming projects. To
        streamline your approach, I recommend selecting two or three color
        ranges in addition to a grey range to consistently apply across your
        work.
      </div>

      <h2 className="h1 text-center mt-24 mb-4">Why Is This?</h2>
      <div className="text-lg leading-8 mt-8 mb-10">
        As a developer, the process of choosing website colors often poses
        challenges. To address this, I've developed a tool that adheres to the
        color concept of <a href="https://tailwindcss.com/docs/customizing-colors"> Tailwind</a>,
        while also generating an entire palette derived from a single base
        color. This tool conveniently produces both Tailwind and CSS code,
        making it adaptable for various projects. Above all, its user-friendly
        design ensures effortless utilization.
      </div>
    </>
  );
}
