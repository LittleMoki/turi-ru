import { Container } from "@/Components";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoCompassOutline } from "react-icons/io5";

export const PopularDestinations = () => {
    return (
        <section>
            <Container>
                <div className="flex justify-between items-center pb-4">
                    <h1 className="text-2xl">Популярные направления</h1>
                    <a href="/" className="flex items-center gap-2">
                        Смотреть все
                        <IoIosArrowRoundForward className="border border-[#37af24] w-[25px] h-[25px] rounded-full hover:bg-[#37af24] hover:text-white" />
                    </a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                    <a
                        className="col-span-1 sm:col-span-2 relative max-h-[150px] sm:max-h-[250px] overflow-hidden rounded-xl"
                        href="#!"
                    >
                        <img
                            className="w-full h-full object-cover"
                            src="https://turi-uzbekistana.ru/images/country/20231208500127172.jpg"
                            alt="bgPopular"
                        />
                        <div className="absolute bottom-[10px] left-[10px] backdrop-opacity-50  bg-white/75 py-[10px] px-[20px] rounded-xl">
                            <h3>Узбекистан</h3>
                            <span className="flex items-center gap-1">
                                <IoCompassOutline className="text-[#37af24] w-[20px] h-[20px]" />
                                45 туров
                            </span>
                        </div>
                    </a>
                    <a
                        href="#!"
                        className="col-span-1 relative max-h-[150px] sm:max-h-[250px] overflow-hidden rounded-xl"
                    >
                        <img
                            className="w-full h-full object-cover"
                            src="https://turi-uzbekistana.ru/images/country/20220604997345805.jpg
                        "
                            alt="bgPopular"
                        />
                        <div className="absolute bottom-[10px] left-[10px] backdrop-opacity-50  bg-white/75 py-[10px] px-[20px] rounded-xl">
                            <h3>Таджикистан</h3>
                            <span className="flex items-center gap-1">
                                <IoCompassOutline className="text-[#37af24] w-[20px] h-[20px]" />
                                1 туров
                            </span>
                        </div>
                    </a>
                    <a
                        href="#!"
                        className="relative max-h-[150px] sm:max-h-[250px] overflow-hidden rounded-xl"
                    >
                        <img
                            className="w-full h-full object-cover "
                            src="https://turi-uzbekistana.ru/images/country/20231208114995576.png
                        "
                            alt="bgPopular"
                        />
                        <div className="absolute bottom-[10px] left-[10px] backdrop-opacity-50  bg-white/75 py-[10px] px-[20px] rounded-xl">
                            <h3>Кыргызстан</h3>
                            <span className="flex items-center gap-1">
                                <IoCompassOutline className="text-[#37af24] w-[20px] h-[20px]" />
                                3 туров
                            </span>
                        </div>
                    </a>
                    <a
                        href="#!"
                        className="lg:col-auto sm:col-span-2 col-span-1 relative max-h-[150px] sm:max-h-[250px] overflow-hidden rounded-xl"
                    >
                        <img
                            className="w-full h-full object-cover"
                            src="https://turi-uzbekistana.ru/images/country/202312082070860533.jpg
                        "
                            alt="bgPopular"
                        />
                        <div className="absolute bottom-[10px] left-[10px] backdrop-opacity-50  bg-white/75 py-[10px] px-[20px] rounded-xl">
                            <h3>Казахстан</h3>
                            <span className="flex items-center gap-1">
                                <IoCompassOutline className="text-[#37af24] w-[20px] h-[20px]" />
                                5 туров
                            </span>
                        </div>
                    </a>
                    <a
                        href="#!"
                        className="relative max-h-[150px] sm:max-h-[250px] overflow-hidden rounded-xl lg:col-auto sm:col-span-2 col-span-1"
                    >
                        <img
                            className="w-full h-full object-cover"
                            src="https://turi-uzbekistana.ru/images/country/20230306896779099.jpg
                        "
                            alt="bgPopular"
                        />
                        <div className="absolute bottom-[10px] left-[10px] backdrop-opacity-50  bg-white/75 py-[10px] px-[20px] rounded-xl">
                            <h3>Грузия</h3>
                            <span className="flex items-center gap-1">
                                <IoCompassOutline className="text-[#37af24] w-[20px] h-[20px]" />
                                2 туров
                            </span>
                        </div>
                    </a>
                    <a
                        href="#!"
                        className="col-span-1 lg:col-span-2 relative max-h-[150px] sm:max-h-[250px] overflow-hidden rounded-xl"
                    >
                        <img
                            className="w-full h-full object-cover"
                            src="https://turi-uzbekistana.ru/images/country/20231208856337873.jpg
                        "
                            alt="bgPopular"
                        />
                        <div className="absolute bottom-[10px] left-[10px] backdrop-opacity-50  bg-white/75 py-[10px] px-[20px] rounded-xl">
                            <h3>Грузия</h3>
                            <span className="flex items-center gap-1">
                                <IoCompassOutline className="text-[#37af24] w-[20px] h-[20px]" />
                                2 туров
                            </span>
                        </div>
                    </a>
                </div>
            </Container>
        </section>
    );
};
