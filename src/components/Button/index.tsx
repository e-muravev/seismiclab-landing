import { FC, PropsWithChildren, ReactElement } from "react";

interface ButtonProps extends PropsWithChildren {
  className?: string;
  icon?: ReactElement;
}

const Button: FC<ButtonProps> = ({ className, children, icon }) => {
  return (
    <button
      className={`${className} w-64 h-16 bg-[#0c3997] z-1 flex items-center justify-center hover:bg-sky-700 cursor-pointer`}>
      <div className="flex gap-4 items-center">
        <p className=" text-xl text-white font-bold cursor-pointer">{children}</p>
        {icon}
      </div>
    </button>
  );
};

export default Button;
