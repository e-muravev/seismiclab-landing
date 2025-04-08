import Image from "next/image";
import "./styles.css";
import { Fragment } from "react";

const LogoContainer = () => {
  return (
    <div className="w-full flex flex-col z-1 overflow-hidden">
      <div className="logoContainer flex justify-between items-center gap-16">
        {Array(4)
          .fill(0)
          .map((_el, idx) => (
            <Fragment key={idx}>
              <Image src="/gazprom.png" alt="logo" width={170} height={42} />
              <Image src="/lukoil.png" alt="logo" width={170} height={62} />
              <Image src="/rosneft.png" alt="logo" width={170} height={52} />
            </Fragment>
          ))}
        <Image src="/gazprom.png" alt="logo" width={170} height={82} />
      </div>
    </div>
  );
};

export default LogoContainer;
