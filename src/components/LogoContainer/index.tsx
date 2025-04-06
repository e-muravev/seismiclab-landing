import Image from "next/image";
import "./styles.css";

const LogoContainer = () => {
  return (
    <div className="flex flex-col z-1 overflow-hidden">
      <div className="logoContainer items-center gap-16">
        <Image src="/gazprom.png" alt="logo" width={170} height={72} />
        <Image src="/lukoil.png" alt="logo" width={170} height={52} />
        <Image src="/rosneft.png" alt="logo" width={170} height={42} />
        <Image src="/gazprom.png" alt="logo" width={170} height={72} />
        <Image src="/lukoil.png" alt="logo" width={170} height={52} />
        <Image src="/rosneft.png" alt="logo" width={170} height={42} />
        <Image src="/gazprom.png" alt="logo" width={170} height={72} />
        <Image src="/lukoil.png" alt="logo" width={170} height={52} />
        <Image src="/rosneft.png" alt="logo" width={170} height={42} />
        <Image src="/gazprom.png" alt="logo" width={170} height={72} />
        <Image src="/lukoil.png" alt="logo" width={170} height={52} />
        <Image src="/rosneft.png" alt="logo" width={170} height={42} />
        <Image src="/gazprom.png" alt="logo" width={170} height={72} />
        <Image src="/lukoil.png" alt="logo" width={170} height={52} />
        <Image src="/rosneft.png" alt="logo" width={170} height={42} />
        <Image src="/gazprom.png" alt="logo" width={170} height={72} />
      </div>
    </div>
  );
};

export default LogoContainer;
