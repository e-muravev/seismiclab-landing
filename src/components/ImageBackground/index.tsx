import { Fragment } from "react";
import Image from "next/image";

const ImageBackground = () => {
  return (
    <Fragment>
      <Image
        className="fixed top-0 left-0 object-cover w-screen h-screen"
        src="/background.jpg"
        alt="background"
        width={800}
        height={800}
      />
      <div className="fixed top-0 left-0 bg-black w-screen h-screen opacity-78"></div>
    </Fragment>
  );
};

export default ImageBackground;
