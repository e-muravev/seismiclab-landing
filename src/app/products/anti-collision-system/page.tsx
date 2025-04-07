import Image from "next/image";
import ImageBackground from "@/components/ImageBackground";
import Header from "@/components/Layout/Header";
import { products } from "@/lib/data/products";

const product = products[0];

const AntiCollisionSystem = () => {
  return (
    <div className="relative flex flex-col px-32 max-w-480 mx-auto pb-8">
      <Header />
      <main className="z-1 flex flex-col gap-24 pt-24">
        <div className="flex flex-col gap-8">
          <h1 className="text-6xl text-[#004C97] font-bold">{product.name}</h1>
          <h2 className="text-2xl text-white">{product.description}</h2>
          <Image className="w-full h-auto object-cover" src={product.cover} width={1200} height={1024} alt="cover" />
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="text-4xl text-[#004C97] font-bold">Кратко</h2>
          <div className="flex gap-8">
            <div className="flex flex-col gap-8 p-8 bg-gray-950 w-1/4 rounded-xl opacity-85">
              <h2 className="text-3xl text-white">Цель продукта</h2>
              <h2 className="text-2xl text-white">Обеспечение безопасности горного производства</h2>
            </div>
            <div className="flex flex-col gap-8 p-8 bg-white w-1/4 rounded-xl opacity-85">
              <h2 className="text-3xl text-black">Рынок</h2>
              <h2 className="text-2xl text-black">7,5 млрд</h2>
            </div>
            <div className="flex flex-col gap-8 p-8 bg-gray-950 w-1/4 rounded-xl opacity-85">
              <h2 className="text-3xl text-white">Стадия зрелости</h2>
              <h2 className="text-2xl text-white">65%</h2>
            </div>
            <div className="flex flex-col gap-8 p-8 bg-white w-1/4 rounded-xl opacity-85">
              <h2 className="text-3xl text-black">Запрос средств</h2>
              <h2 className="text-2xl text-black">43 млн</h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="text-4xl text-[#004C97] font-bold">Описание системы</h2>
          <div className="grid grid-cols-2 gap-16">
            <div className="flex flex-col gap-8 text-justify">
              <p className="text-2xl text-white">
                Транспортные средства(ТС) оснащаются модулем позиционирования (SLAB-AC), операторской панелью(HMI) и
                низкочастотными приемопередатчиками (TX/RX) по периметру.
              </p>
              <p className="text-2xl text-white">
                Модуль позиционирования регистрирует технику, персонал и опасные зоны, с учетом уровня риска.
              </p>
              <p className="text-2xl text-white">
                Транспондеры создают зону с максимальный уровнем риска вокруг ТС, при попадании в которую другого ТС или
                обслуживающего персонала срабатывает оповещение, а экран отображает направление до угрозы.
              </p>
              <p className="text-2xl text-white">
                Головные светильники снабжены устройством SLAB-ACM обеспечивающим контроль нахождения в зонах
                максимального уровня риска и светозвуковым предупреждением об опасности.
              </p>
            </div>
            <Image
              className="w-full h-auto"
              src="/products/anti-collision-system/scheme.png"
              alt="technology-diagram"
              width={1000}
              height={1000}
            />
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="text-4xl text-[#004C97] font-bold">Технология</h2>
          <div className="grid grid-cols-2 gap-16 text-justify">
            <div className="flex flex-col gap-8">
              <p className="text-2xl text-white">
                Из диаграммы видно, что максимальная точность позиционирования достигается применением технологий VLF,
                Radar и UWB (Radar – очевидно неприменима в условиях производств)
              </p>
              <p className="text-2xl text-white">Совершенствование СПК предлагается на базе UWB/VLF технологий</p>
            </div>
            <Image
              className="w-full h-auto"
              src="/products/anti-collision-system/technology-diagram.png"
              alt="technology-diagram"
              width={1000}
              height={1000}
            />
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="text-4xl text-[#004C97] font-bold">Сравнение с аналогами</h2>
          <table className="text-white w-full text-left text-xl">
            <thead>
              <tr className="bg-black opacity-85">
                <th className="px-6 py-4">Производитель/ наименование продукции</th>
                <th className="px-6 py-4">Наличие UWB-метки</th>
                <th className="px-6 py-4">Наличие VLF/LF-метки</th>
                <th className="px-6 py-4">Стоимость решения</th>
                <th className="px-6 py-4">Дальность действия под землей при точности 1 м</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white opacity-85">
                <td className="px-6 py-4 text-black">Real Trac (Россия)</td>
                <td className="px-6 py-4 text-black">Да</td>
                <td className="px-6 py-4 text-black">Нет</td>
                <td className="px-6 py-4 text-black">{`Высокая (> $10000/ 1ед. ГТТ)`}</td>
                <td className="px-6 py-4 text-black">до 25 м. Точность достигается не всегда</td>
              </tr>
              <tr className="bg-gray-900 opacity-85">
                <td className="px-6 py-4">Real Trac (Россия)</td>
                <td className="px-6 py-4">Да</td>
                <td className="px-6 py-4">Да</td>
                <td className="px-6 py-4">{`Высокая(> $11000/ 1ед. ГТТ)`}</td>
                <td className="px-6 py-4">не более 9 м</td>
              </tr>
              <tr className="bg-white opacity-85">
                <td className="px-6 py-4 text-black">MST Global (Австралия)/Proximity Detection</td>
                <td className="px-6 py-4 text-black">Да</td>
                <td className="px-6 py-4 text-black">Да</td>
                <td className="px-6 py-4 text-black">{`Средняя (< $3500/ 1ед. ГТТ)`}</td>
                <td className="px-6 py-4 text-black">до 25 м. Точность достигается не всегда</td>
              </tr>
              <tr className="bg-gray-900 opacity-85">
                <td className="px-6 py-4">Real Trac (Россия)</td>
                <td className="px-6 py-4">Да</td>
                <td className="px-6 py-4">Нет</td>
                <td className="px-6 py-4">{`Высокая (> $10000/ 1ед. ГТТ)`}</td>
                <td className="px-6 py-4">до 25 м</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="text-4xl text-[#004C97] font-bold">Ситуация на рынке</h2>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-8 bg-gray-900 rounded-xl p-8 opacity-85">
              <p className="text-2xl text-white">
                Компании-недропользователи ищут альтернативу ввиду высоких цен поставщика
              </p>
              <p className="text-2xl text-white">
                Необходимо выполнять требования правил Ростехнадзора: ПРИКАЗ № 505 от 8 декабря 2020 г. и ПРИКАЗ РТН от
                10 ноября 2020 г. N 436 (п.559)
              </p>
              <p className="text-2xl text-white">Полная монополия на рынке РФ компании «Real Trac»</p>
              <p className="text-2xl text-white">
                Свое присутствие также стали обозначать компании «УралТехИс» и МРС-Р
              </p>
            </div>
            <div className="flex flex-col gap-8 bg-white rounded-xl p-8 opacity-85">
              <p className="text-2xl">
                В России и странах СНГ (главным образом, Казахстан, Узбекистан, Киргизия, Таджикистан) свыше 450
                предприятия, ведущих добычу закрытым способом
              </p>
              <p className="text-2xl">Ежегодно растет потребность в системах промышленной автоматизации и МФСБ</p>
              <p className="text-2xl">
                Средний чек одного контракта на оборудование одного горнодобывающего предприятия МФСБ, системами
                диспетчеризации, промышленной радиосвязи и пр. составляет не менее $1,5 млн.
              </p>
              <p className="text-2xl">Таким образом, общий объем рынка может достигать, как минимум $550 млн. в год</p>
            </div>
          </div>
        </div>
      </main>
      <ImageBackground />
    </div>
  );
};

export default AntiCollisionSystem;
