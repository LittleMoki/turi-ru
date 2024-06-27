import { Container } from "@/Components";
import {
    FaBed,
    FaCameraRetro,
    FaCar,
    FaHandshake,
    FaInfoCircle,
    FaMoneyBillWave,
    FaPlane,
    FaTrain,
    FaUser,
    FaWineGlassAlt,
} from "react-icons/fa";
import { FaTicket } from "react-icons/fa6";
export const TourInclude = () => {
    return (
        <section>
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-10">
                    <div className="bg-white p-5 rounded-xl shadow-lg">
                        <h3 className="text-2xl pb-3 text-center font-medium">
                            Включено
                        </h3>
                        <ul className="flex flex-col gap-1">
                            <li className="flex items-start gap-2">
                                <FaTicket className="min-w-4 min-h-4" />
                                Входные билеты в музеи, для посещения
                                достопримечательностей, памятников
                            </li>
                            <li className="flex items-start gap-2">
                                <FaUser className="min-w-4 min-h-4" />
                                Гид - экскурсовод (Сертифицированные)
                            </li>
                            <li className="flex items-start gap-2">
                                <FaCar className="min-w-4 min-h-4" />
                                Транспорт во время экскурсий
                            </li>
                            <li className="flex items-start gap-2">
                                <FaTrain className="min-w-4 min-h-4" />
                                ЖД билеты эконом класса
                            </li>
                            <li className="flex items-start gap-2">
                                <FaBed className="min-w-4 min-h-4" />
                                Размещение в 3* отелях (согласно программе)+
                                Завтраки
                            </li>
                            <li className="flex items-start gap-2">
                                <FaHandshake className="min-w-4 min-h-4" />
                                Встречи и проводы в аэропорт
                            </li>
                            <li className="flex items-start gap-2">
                                <FaMoneyBillWave className="min-w-4 min-h-4" />
                                Тур Сбор в отеле
                            </li>
                            <li className="flex items-start gap-2">
                                <FaWineGlassAlt className="min-w-4 min-h-4" />
                                Питьевая вода (2 по 0,5 литр на 1 чел в день)
                            </li>
                        </ul>
                    </div>
                    <div className="bg-white p-5 rounded-xl shadow-lg">
                        <h3 className="text-2xl pb-3 font-medium text-center">
                            Дополнительно
                        </h3>
                        <ul className="flex flex-col gap-1">
                            <li className="flex items-start gap-2">
                                <FaPlane className="min-w-4 min-h-4" />
                                Международные перелеты в Узбекистан и обратно
                            </li>
                            <li className="flex items-start gap-2">
                                <FaInfoCircle className="min-w-4 min-h-4" />
                                Дополнительные услуги в отелях
                            </li>
                            <li className="flex items-start gap-2">
                                <FaMoneyBillWave className="min-w-4 min-h-4" />
                                Чаевые для гида и водителей
                            </li>
                            <li className="flex items-start gap-2">
                                <FaCameraRetro className="min-w-4 min-h-4" />
                                Дополнительный досуг
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    );
};
