import Link from "next/link";
import Image from "next/image";

export const headerLinks = [
  { label: "Услуги", path: "services" },
  { label: "Продукция", path: "products" },
  { label: "Документация", path: "documents" },
  { label: "О нас", path: "about" },
  { label: "Контакты", path: "contacts" },
];

const Header = () => {
  return (
    <header className="basis-[112px] z-1 flex justify-between items-center py-8">
      <Link href={"/"}>
        <Image className="cursor-pointer" src="/logo.png" width={162} height={64} alt="logo" />
      </Link>
      <div>
        {headerLinks.map((link) => (
          <Link
            href={link.path}
            className="mr-8 cursor-pointer text-white  text-lg hover:text-[#0c3997]"
            key={link.path}>
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
