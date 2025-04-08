import LogoContainer from "@/components/LogoContainer";
import Header from "@/components/Layout/Header";
import ImageBackground from "@/components/ImageBackground";

const About = () => {
  return (
    <div className="relative flex flex-col px-4 lg:px-16 xl:px-32 max-w-480 mx-auto">
      <Header />
      <main className="grow-1 z-1 overflow-hidden py-8 flex items-center pb-8 lg:pb-16 xl:pb-32">
        <div className="flex flex-col gap-6 md:gap-8">
          <h2 className="text-2xl md:text-4xl text-[#004C97]">Основное</h2>
          <div className="flex flex-col gap-4">
            <p className="text-xl md:text-2xl text-justify text-white">
              Мы располагаем профессиональным оборудованием и опытом, который гарантирует качество работы.
            </p>
            <p className="text-xl md:text-2xl text-justify text-white">
              ООО «СейсмикЛаб» является квалифицированным разработчиком и поставщиком инновационного
              аппаратно-программного и технического обеспечения, систем автоматизации производства.
            </p>
            <p className="text-xl md:text-2xl text-justify text-white">
              Также компания выполняет несколько видов деятельности в области комплексных поставок промышленной
              продукции, контрактных НИОКР и сопутствующего инжиниринга, внедрения передовых научно-технических
              разработок.
            </p>
            <p className="text-xl md:text-2xl text-justify text-white">
              С января 2024 года компания ООО «СейсмикЛаб» является резидентом «Сколково».
            </p>
          </div>
          <h2 className="text-2xl md:text-4xl text-[#004C97]">Заголовок 2</h2>
          <div className="flex flex-col gap-4">
            <p className="text-xl md:text-2xl text-justify text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
          <h2 className="text-2xl md:text-4xl text-[#004C97]">Наши партнеры</h2>
          <LogoContainer />
        </div>
      </main>
      <ImageBackground />
    </div>
  );
};

export default About;
