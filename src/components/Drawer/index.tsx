import { FC, PropsWithChildren } from "react";

interface DrawerProps extends PropsWithChildren {
  open: boolean;
  onClose: () => void;
}

const Drawer: FC<DrawerProps> = ({ open, children, onClose }) => {
  return (
    <div
      id="drawer-example"
      className={`fixed top-0 left-0 z-40 h-screen ${
        open ? "" : "transition-transform -translate-x-full"
      } p-4 bg-black w-80 xl:hidden`}>
      <div className="flex flex-col gap-8 p-16">{children}</div>
      <button
        className="text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 absolute top-5 end-5 flex items-center justify-center"
        onClick={onClose}>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
    </div>
  );
};

export default Drawer;
