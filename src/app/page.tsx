import Button from "@/components/Button";
import Header from "@/components/Layout/Header";
import LogoContainer from "@/components/LogoContainer";
import VideoWithOverlay from "@/components/VideoWithOverlay";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative w-screen h-screen flex flex-col px-4 lg:px-16 xl:px-32 max-w-480 mx-auto">
      <Header />
      <main className="grow-1 z-1">
        <div className="w-full h-full flex flex-col">
          <div id="content" className="flex flex-col justify-center items-between md:text-justify grow-1 gap-16">
            <div>
              <h1 className="text-4xl md:text-6xl text-[#004C97] font-bold mb-8">Первые в шахтной связи</h1>
              <p className="text-xl md:text-3xl mb-8 text-white  w-full 2xl:w-1/2 ">
                Мы располагаем профессиональным оборудованием и опытом, который гарантирует качество работы.
              </p>
              <p className="text-xl md:text-2xl text-left xl:text-right text-white">
                С января 2024 года являемся резидентом{" "}
                <a className="underline decoration-solid hover:text-[#004C97]" href="https://www.sk.ru/">
                  «Сколково»
                </a>
                .
              </p>
            </div>
            <LogoContainer />
            <FindOutMoreButton className="ml-auto" />
          </div>
        </div>
      </main>
      <VideoWithOverlay />
    </div>
  );
}

const FindOutMoreButton = ({ className }: { className?: string }) => {
  return (
    <Link href="about">
      <Button
        className={`${className} z-1 relative`}
        icon={
          <svg
            className="w-5 h-5 md:w-6 md:h-6"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="20"
            viewBox="0 0 37 29"
            fill="none">
            <g opacity="0.5">
              <mask id="path-1-inside-1_5135_28368" fill="white">
                <path d="M1.57887 13.061C1.15978 13.061 0.757862 13.2275 0.461521 13.5239C0.165184 13.8202 -0.00129698 14.2221 -0.00129698 14.6412C-0.00129697 15.0603 0.165184 15.4622 0.461521 15.7585C0.757862 16.0549 1.15978 16.2214 1.57887 16.2214L1.57887 13.061ZM1.57887 16.2214L35.2891 16.2214L35.2891 13.061L1.57887 13.061L1.57887 16.2214Z" />
              </mask>
              <path
                d="M1.57887 13.061C1.15978 13.061 0.757862 13.2275 0.461521 13.5239C0.165184 13.8202 -0.00129698 14.2221 -0.00129698 14.6412C-0.00129697 15.0603 0.165184 15.4622 0.461521 15.7585C0.757862 16.0549 1.15978 16.2214 1.57887 16.2214L1.57887 13.061ZM1.57887 16.2214L35.2891 16.2214L35.2891 13.061L1.57887 13.061L1.57887 16.2214Z"
                fill="black"
              />
              <path
                d="M3.74553 16.2214L3.74553 13.061L-0.587799 13.061L-0.587799 16.2214L3.74553 16.2214ZM35.2891 16.2214L35.2891 20.5547L39.6224 20.5547L39.6224 16.2214L35.2891 16.2214ZM35.2891 13.061L39.6224 13.061L39.6224 8.7277L35.2891 8.7277L35.2891 13.061ZM1.57887 8.7277C0.0105094 8.7277 -1.49361 9.35073 -2.60261 10.4597L3.52565 16.588C3.00933 17.1043 2.30906 17.3944 1.57887 17.3944L1.57887 8.7277ZM-2.60261 10.4597C-3.71161 11.5687 -4.33463 13.0728 -4.33463 14.6412L4.33204 14.6412C4.33204 15.3714 4.04198 16.0717 3.52565 16.588L-2.60261 10.4597ZM-4.33463 14.6412C-4.33463 16.2096 -3.71161 17.7137 -2.60261 18.8227L3.52565 12.6944C4.04198 13.2107 4.33204 13.911 4.33204 14.6412L-4.33463 14.6412ZM-2.60261 18.8227C-1.49361 19.9317 0.0105096 20.5547 1.57887 20.5547L1.57887 11.888C2.30906 11.888 3.00933 12.1781 3.52565 12.6944L-2.60261 18.8227ZM1.57887 20.5547L35.2891 20.5547L35.2891 11.888L1.57887 11.888L1.57887 20.5547ZM39.6224 16.2214L39.6224 13.061L30.9557 13.061L30.9557 16.2214L39.6224 16.2214ZM35.2891 8.7277L1.57887 8.7277L1.57887 17.3944L35.2891 17.3944L35.2891 8.7277Z"
                fill="white"
                mask="url(#path-1-inside-1_5135_28368)"
              />
            </g>
            <path
              d="M22.6477 27.2826L35.2891 14.6413L22.6477 2"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }>
        Узнать больше
      </Button>
    </Link>
  );
};
