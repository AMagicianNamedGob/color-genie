export default function Blot({ color }: { color: string }) {


  return (
    <span>
      <div
        className={`bg-${color} border-2 border-white rounded-lg p-12`}
      ></div>
      <p className="text-xl text-center capitalize py-2">{color}</p>

    </span>
  );
}
