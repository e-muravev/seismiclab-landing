import { FC, PropsWithChildren, ReactElement } from "react";

interface ButtonProps extends PropsWithChildren {
  className?: string;
  icon?: ReactElement;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ className, children, icon, onClick }) => {
  return (
    <button
      className={`${className} px-6 py-4 md:px-8 md:py-5 bg-[#004C97] z-1 flex items-center justify-center hover:bg-sky-700 cursor-pointer`}
      onClick={onClick}>
      <div className="flex gap-4 items-center">
        <p className="md:text-xl text-white font-bold cursor-pointer">{children}</p>
        {icon}
      </div>
    </button>
  );
};

export default Button;
