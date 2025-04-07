import Card from "@/components/Card";
import ImageBackground from "@/components/ImageBackground";
import Header from "@/components/Layout/Header";
import { products } from "@/lib/data/products";

const tags = ["Продукция 1", "Продукция 2", "Продукция 3", "Продукция 4", "Продукция 5"];

const Products = () => {
  return (
    <div className="relative flex flex-col px-32 max-w-480 mx-auto pb-8">
      <Header />
      <main className="z-1">
        <div className="py-16 flex gap-16">
          {tags.map((tag, idx) => (
            <span
              className={`${idx === 0 ? "text-[#004C97]" : "text-white"}  text-xl cursor-pointer hover:text-[#004C97]`}
              key={tag}>
              {tag}
            </span>
          ))}
        </div>
        {products.map((product) => (
          <Card
            key={product.slug}
            imgSrc={product.cover}
            slug={`products/${product.slug}`}
            title={product.name}
            description={product.description}
          />
        ))}
      </main>
      <ImageBackground />
    </div>
  );
};

export default Products;
