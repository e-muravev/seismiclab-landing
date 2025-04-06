import LogoContainer from "@/components/LogoContainer";
import Header from "@/components/Layout/Header";
import ImageBackground from "@/components/ImageBackground";

const About = () => {
  return (
    <div className="relative flex flex-col px-32 max-w-480 mx-auto">
      <Header />
      <main className="grow-1 z-1 overflow-hidden my-8 flex items-center">
        <div className="flex flex-col gap-8">
          <h2 className=" text-3xl text-[#0c3997]">Основное</h2>
          <div className="flex flex-col gap-4">
            <p className=" text-xl text-justify text-white">
              Мы располагаем профессиональным оборудованием и опытом, который гарантирует качество работы. Обращайтесь к
              нам без сомнений.
            </p>
            <p className=" text-xl text-justify text-white">
              ООО «СейсмикЛаб» является квалифицированным разработчиком и поставщиком инновационного
              аппаратно-программного и технического обеспечения, систем автоматизации производства.
            </p>
            <p className=" text-xl text-justify text-white">
              Также компания выполняет несколько видов деятельности в области комплексных поставок промышленной
              продукции, контрактных НИОКР и сопутствующего инжиниринга, внедрения передовых научно-технических
              разработок.
            </p>
            <p className=" text-xl text-justify text-white">
              С января 2024 года компания ООО «СейсмикЛаб» является резидентом «Сколково». Сайт находится на финальной
              стадии разработки.
            </p>
          </div>
          <h2 className=" text-3xl text-[#0c3997]">Заголовок 2</h2>
          <div className="flex flex-col gap-4">
            <p className=" text-xl text-justify text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <p className=" text-xl text-justify text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
          <h2 className=" text-3xl text-[#0c3997]">Наши партнеры</h2>
          <LogoContainer />
        </div>
      </main>
      <ImageBackground />
    </div>
  );
};

export default About;
