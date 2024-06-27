import { Card, Container } from "@/Components";
export const RecomendedTours = () => {
    const cards = [
        {
            link: "#!",
            discount: "14",
            img: "https://turi-uzbekistana.ru/images/tour/202403121634156765.webp",
            title: "Групповой тур в Узбекистан на майские праздники 2024",
            tourGuaranted: "Тур гарантирован!",
            tourTypeName: " Туры в Узбекистан весной 2024",
            tourCountry: "Узбекистан",
            tourDay: "8",
            tourPlace: "4",
            tourPiceDiscount: "1105",
            tourPrice: "955",
            tourPriceRub: "88 815",
        },
        {
            link: "#!",
            tourLabel: "Открыт набор",
            img: "https://turi-uzbekistana.ru/images/tour/202403121634156765.webp",
            title: "Групповой тур в Узбекистан на майские праздники 2024",
            tourGuaranted: "Тур гарантирован!",
            tourTypeName: " Туры в Узбекистан весной 2024",
            tourCountry: "Узбекистан",
            tourDay: "8",
            tourPlace: "4",
            tourPiceDiscount: "1105",
            tourPrice: "955",
            tourPriceRub: "88 815",
        },
        {
            link: "#!",
            discount: "10",
            tourLabel: "Открыт набор",
            img: "https://turi-uzbekistana.ru/images/tour/202403121634156765.webp",
            title: "Групповой тур в Узбекистан на майские праздники 2024",
            tourGuaranted: "Тур гарантирован!",
            tourTypeName: " Туры в Узбекистан весной 2024",
            tourCountry: "Узбекистан",
            tourDay: "8",
            tourPlace: "4",
            tourPiceDiscount: "1105",
            tourPrice: "955",
            tourPriceRub: "88 815",
        },
    ];
    return (
        <section className="py-12">
            <Container>
                <h1 className="text-3xl mb-2">Рекомендуемые туры</h1>
                <ul className="flex gap-2 flex-wrap">
                    <li className="py-1 px-3 rounded-lg hover:bg-[#15803D] hover:text-white transition-colors cursor-pointer bg-white">
                        Узбекситан
                    </li>
                    <li className="py-1 px-3 rounded-lg hover:bg-[#15803D] hover:text-white transition-colors cursor-pointer bg-white">
                        Туркменистан
                    </li>
                    <li className="py-1 px-3 rounded-lg hover:bg-[#15803D] hover:text-white transition-colors cursor-pointer bg-white">
                        Казахстан
                    </li>
                    <li className="py-1 px-3 rounded-lg hover:bg-[#15803D] hover:text-white transition-colors cursor-pointer bg-white">
                        Иран
                    </li>
                    <li className="py-1 px-3 rounded-lg hover:bg-[#15803D] hover:text-white transition-colors cursor-pointer bg-white">
                        Грузия
                    </li>
                </ul>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pt-5 gap-6">
                    {cards.map((el, i) => (
                        <Card {...el} key={i} />
                    ))}
                    <div className="relative cursor-pointer rounded-xl overflow-hidden">
                        <div className="z-[-1] absolute top-0 left-0 w-full h-full bg-[#000] opacity-40 "></div>
                        <img
                            className="object-cover z-[-2] absolute w-full h-full"
                            src="https://turi-uzbekistana.ru/images/country/20231208500127172.jpg"
                            alt="bg_image"
                        />
                        <div className="flex flex-col gap-3 text-white absolute bottom-0 w-full items-center py-[20px] px-[10px]">
                            <h2 className="text-2xl">Узбекистан</h2>
                            <a
                                className="bg-[#15803D] py-[10px] px-[15px] w-full text-center rounded-xl font-semibold hover:bg-[#166534] transition-colors"
                                href="#!"
                            >
                                Смотреть все туры
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
