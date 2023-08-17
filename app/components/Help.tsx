export default function Help() {
  return (
    <>
      <h2 id="help" className="h1 text-center mt-24 mb-4">
        How Do I Use This?
      </h2>
      <p className="text-lg leading-8 mt-8 mt:mb-10">
        Simply enter a hex code in the input field and click the 'generate code'
        button. You can also use the paint brush button to open the picker and
        select a color. The gear button is useful to to help zero in the
        palette, especially if you select a very bright or very dark base color.
        Once you've generated a palette, you can copy the CSS code to your
        clipboard and paste into you own stylesheet. The code generator also
        includes a Tailwind toggle if you want to{" "}
        <a href="https://tailwindcss.com/docs/customizing-colors#using-custom-colors">
          use custom colors in your Tailwind config
        </a>
        .
      </p>
      <h2 className="h1 text-center mt-24 mb-4">Why Is This?</h2>
      <p className="text-lg leading-8 mt-8 mt:mb-10">
        As a developer picking website colors can be quite a challenge, so I
        decided to create a tool that uses the same color concept as{" "}
        <a href="https://tailwindcss.com/docs/customizing-colors">Tailwind</a>,
        but also generates an entire pallette from a single base color. It also
        had to generate the code for both Tailwind and CSS so I could use it in
        any project. Most importantly it had to be simple to use.
      </p>
      <p className="text-lg leading-8 mt-2">
        I hope you find this tool useful. If you're curious to read a bit more
        about how I built this, check out my{" "}
        <a href="https://jaredmakes.com/blog/">blog</a>.
      </p>
    </>
  );
}
