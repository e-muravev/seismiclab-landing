import Card from "@/components/Card";
import ImageBackground from "@/components/ImageBackground";
import Header from "@/components/Layout/Header";

const tags = ["Разработка", "Проектирование", "Поставка", "CМР", "Обучение", "Обслуживание"];

const Services = () => {
  return (
    <div className="relative flex flex-col px-4 lg:px-16 xl:px-32 max-w-480 mx-auto">
      <Header />
      <main className="z-1">
        <div className="py-2 md:py-16 flex gap-x-8 gap-y-2 md:gap-x-16 md:gap-y-4 flex-wrap">
          {tags.map((tag, idx) => (
            <span
              className={`${
                idx === 0 ? "text-[#004C97]" : "text-white"
              } text-lg  md:text-xl cursor-pointer hover:text-[#004C97]`}
              key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <Card
          imgSrc="/cardPlaceholder.jpg"
          slug="1"
          title="Название"
          description={[
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          ]}
        />
        <Card
          imgSrc="/cardPlaceholder.jpg"
          slug="2"
          title="Название"
          description={[
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          ]}
        />
        <Card
          imgSrc="/cardPlaceholder.jpg"
          slug="3"
          title="Название"
          description={[
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          ]}
        />
        <Card
          imgSrc="/cardPlaceholder.jpg"
          slug="3"
          title="Название"
          description={[
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          ]}
        />
        <Card
          imgSrc="/cardPlaceholder.jpg"
          slug="3"
          title="Название"
          description={[
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          ]}
        />
        <Card
          imgSrc="/cardPlaceholder.jpg"
          slug="3"
          title="Название"
          description={[
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          ]}
        />
      </main>
      <ImageBackground />
    </div>
  );
};

export default Services;
