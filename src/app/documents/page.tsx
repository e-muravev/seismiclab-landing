import DocumentCard from "@/components/DocumentCard";
import Header from "@/components/Layout/Header";
import ImageBackground from "@/components/ImageBackground";

const Documents = () => {
  return (
    <div className="relative w-screen h-screen flex flex-col px-4 lg:px-16 xl:px-32 max-w-480 mx-auto">
      <Header />
      <main className="z-1 pb-12">
        <DocumentCard
          title="Название документа"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <DocumentCard
          title="Название документа"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <DocumentCard
          title="Название документа"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <DocumentCard
          title="Название документа"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <DocumentCard
          title="Название документа"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <DocumentCard
          title="Название документа"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
      </main>
      <ImageBackground />
    </div>
  );
};

export default Documents;
