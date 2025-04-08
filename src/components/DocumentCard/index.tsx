import { FC } from "react";
import Button from "../Button";

interface DocumentCardProps {
  title: string;
  description: string;
}

const DocumentCard: FC<DocumentCardProps> = ({ title, description }) => {
  return (
    <div className="flex flex-wrap gap-8 md:flex-nowrap border-b border-white py-8 md:py-16 items-center">
      <div className="grow-1 flex flex-col gap-4 md:gap-8">
        <div className="text-2xl md:text-4xl text-[#004C97]">{title}</div>
        <div className="text-xl md:text-2xl text-white">{description}</div>
      </div>
      <Button className="w-full md:w-auto">Загрузить</Button>
    </div>
  );
};

export default DocumentCard;
