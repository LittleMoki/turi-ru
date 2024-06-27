import {
    FaCalendarAlt,
    FaEnvelope,
    FaMapMarked,
    FaMapMarkerAlt,
    FaOdnoklassniki,
    FaRoute,
    FaTelegram,
    FaUserFriends,
    FaUsers,
    FaVk,
    FaWhatsapp,
} from "react-icons/fa";

export const TourInfoRoute = () => {
    return (
        <div className="bg-white flex flex-col justify-between p-5 w-full lg:max-w-[500px] shadow-lg rounded-xl">
            <h2 className="text-xl text-center max-w-[400px] mx-auto">
                Проведите майские праздники в Узбекистане! : путешествие из
                России
            </h2>
            <ul className="grid lg:justify-items-start max-[420px]:grid-cols-2 grid-cols-3 sm:grid-cols-5 lg:grid-cols-3 py-5 gap-3">
                <li className="flex flex-col gap-[3px]">
                    <FaCalendarAlt className="text-[#15803D] w-5 h-5" />
                    <small className="text-[#666]">Длительность</small>
                    <p className="font-medium text-sm">8 дней</p>
                </li>
                <li className="flex flex-col gap-[3px]">
                    <FaUserFriends className="text-[#15803D] w-5 h-5" />
                    <small className="text-[#666]">Туристов:</small>
                    <p className="font-medium text-sm">2</p>
                </li>
                <li className="flex flex-col gap-[3px]">
                    <FaRoute className="text-[#15803D] w-5 h-5" />
                    <small className="text-[#666]">Транспорт</small>
                    <p className="font-medium text-sm">Поезд</p>
                </li>
                <li className="flex flex-col gap-[3px]">
                    <FaMapMarked className="text-[#15803D] w-5 h-5" />
                    <small className="text-[#666]">Города</small>
                    <p className="font-medium text-sm">4 города</p>
                </li>
                <li className="flex flex-col gap-[3px]">
                    <FaUsers className="text-[#15803D] w-5 h-5" />
                    <small className="text-[#666]">Команда</small>
                    <p className="font-medium text-sm">Minzifa Travel</p>
                </li>
            </ul>
            <div className="flex items-center gap-2 text-sm py-3 text-[#555]">
                <FaMapMarkerAlt className="text-[#15803D]" />
                Ташкент, Самарканд, Бухара, Хива
            </div>
            <div className="flex gap-2 items-center flex-wrap justify-between">
                <p>Поделиться этим туром:</p>
                <div className="flex items-center gap-2">
                    <div className=" flex items-center justify-center rounded-md p-1 text-white bg-[#07f]">
                        <FaVk className="w-5 h-5" />
                    </div>
                    <div className=" flex items-center justify-center rounded-md p-1 text-white bg-[#f70]">
                        <FaOdnoklassniki className="w-5 h-5" />
                    </div>
                    <div className=" flex items-center justify-center rounded-md p-1 text-white bg-[#168de2]">
                        <FaEnvelope className="w-5 h-5" />
                    </div>
                    <div className=" flex items-center justify-center rounded-md p-1 text-white bg-[#65bc54]">
                        <FaWhatsapp className="w-5 h-5" />
                    </div>
                    <div className=" flex items-center justify-center rounded-md p-1 text-white bg-[#64a9dc]">
                        <FaTelegram className="w-5 h-5" />
                    </div>
                </div>
            </div>
        </div>
    );
};

