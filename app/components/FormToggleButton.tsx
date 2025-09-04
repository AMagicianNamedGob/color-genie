import clsx from "clsx";
import Image from "next/image";

interface FormButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  active: boolean;
  title?: string;
  icon: {
    src: string;
  };
}

export default function FormToggleButton(props: FormButtonProps,) {
  const { onClick, icon, active } = props;
  return (
    <button
      className={clsx(
        active
          ? "from-primary-800 to-primary-900"
          : "from-primary-900 to-secondary-100",
        "relative w-14 h-14 flex justify-center items-center text-3xl border-2 border-zinc-500 shadow-inner shadow-white bg-gradient-to-br hover:cursor-pointer hover:from-primary-100 hover:to-primary-900"
      )}
      title={props.title}
      onClick={(e) => onClick(e)}
      role="presentation"
    >
      <Image className="p-1" {...icon} alt="" fill={true} />
    </button>
  );
}
