import { FC } from "react";
import Button from "../Button";

interface DocumentCardProps {
  title: string;
  description: string;
}

const DocumentCard: FC<DocumentCardProps> = ({ title, description }) => {
  return (
    <div className="flex border-b border-white py-16 items-center">
      <div className="grow-1 flex flex-col gap-8">
        <div className=" text-3xl text-[#004C97]">{title}</div>
        <div className=" text-xl text-white">{description}</div>
      </div>
      <Button>Загрузить</Button>
    </div>
  );
};

export default DocumentCard;
