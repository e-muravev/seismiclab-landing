import Button from "@/components/Button";
import Header from "@/components/Layout/Header";
import ImageBackground from "@/components/ImageBackground";

const Contacts = () => {
  return (
    <div className="relative fixed w-screen h-screen flex flex-col px-32 max-w-480 mx-auto">
      <Header />
      <main className="grow-1 z-1 grid grid-cols-2 gap-8 items-center">
        <div className="flex flex-col gap-8">
          <div>
            <h1 className=" text-6xl text-[#004C97] mb-2">Давайте обсудим</h1>
            <h1 className=" text-6xl text-white">вашу задачу</h1>
          </div>
          <h2 className=" text-3xl text-white">Отправьте форму и мы свяжемся с вами в течение 24 часов</h2>
        </div>
        <div className="flex flex-col gap-32">
          <input
            placeholder="Имя"
            className="border-b border-white w-full text-2xl outline-none hover:border-[#004C97] text-white"
            type="text"
          />
          <input
            placeholder="Email / Телефон"
            className="border-b border-white w-full text-2xl outline-none hover:border-[#004C97] text-white"
            type="text"
          />
          <div className="flex gap-4">
            <input className="p-4" type="checkbox" />
            <span className=" text-2xl text-white">
              Соглашаюсь с <a href="/privacy-policy">политикой конфиденциальности</a>
            </span>
          </div>
          <Button>Отправить</Button>
        </div>
      </main>
      <ImageBackground />
    </div>
  );
};

export default Contacts;
