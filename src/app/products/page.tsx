import Card from "@/components/Card";
import ImageBackground from "@/components/ImageBackground";
import Header from "@/components/Layout/Header";

const tags = ["Продукция 1", "Продукция 2", "Продукция 3", "Продукция 4", "Продукция 5"];

const Products = () => {
  return (
    <div className="relative flex flex-col px-32 max-w-480 mx-auto">
      <Header />
      <main className="z-1">
        <div className="py-16 flex gap-16">
          {tags.map((tag, idx) => (
            <span
              className={`${idx === 0 ? "text-[#0c3997]" : "text-white"}  text-xl cursor-pointer hover:text-[#0c3997]`}
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
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          ]}
        />
        <Card
          imgSrc="/cardPlaceholder.jpg"
          slug="2"
          title="Название"
          description={[
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          ]}
        />
        <Card
          imgSrc="/cardPlaceholder.jpg"
          slug="3"
          title="Название"
          description={[
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          ]}
        />
        <Card
          imgSrc="/cardPlaceholder.jpg"
          slug="4"
          title="Название"
          description={[
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          ]}
        />
        <Card
          imgSrc="/cardPlaceholder.jpg"
          slug="5"
          title="Название"
          description={[
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          ]}
        />
        <Card
          imgSrc="/cardPlaceholder.jpg"
          slug="6"
          title="Название"
          description={[
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          ]}
        />
      </main>
      <ImageBackground />
    </div>
  );
};

export default Products;
