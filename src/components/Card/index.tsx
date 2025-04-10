import Image from "next/image";
import Link from "next/link";

import Button from "../Button";

interface Card extends React.HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  slug: string;
  title: string;
  description: string[];
}

const Card: React.FC<Card> = ({ imgSrc, title, slug, description, ...props }) => {
  return (
    <div {...props}>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-16 border-b border-white py-8 md:py-16">
        <div>
          <Image src={imgSrc} alt={title} width={1000} height={1000} className="w-full h-auto object-cover" />
        </div>
        <div>
          <h1 className="text-2xl md:text-4xl text-[#004C97] mb-4 md:mb-8">{title}</h1>
          {description.map((desc) => (
            <p key={desc} className="text-xl md:text-2xl text-white mb-4">
              {desc}
            </p>
          ))}
          <Link href={slug}>
            <Button className="mt-8 md:mt-16">Посмотреть</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
