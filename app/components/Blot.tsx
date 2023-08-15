export default function Blot({ color, name }: { color: string, name: string | number }) {


  return (
    <span>
      <div
        className={`bg-${color} border-2 border-zinc-500 rounded-lg p-5`}
      ></div>
      <p className="text-center capitalize py-2">{name}</p>

    </span>
  );
}
