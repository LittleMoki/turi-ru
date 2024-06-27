import { AccordionComp, Container } from "@/Components";

export const TourBook = ({ fn, accordion }) => {
    const accordionInfo = [
        {
            headerTitle: "02.05.2024 - 09.05.2024",
            openGroup: true,
            isCost: true,
            cost: "$955",
            costRub: "88 815",
            subtitle: " Цена тура указана на 1 человека в двухместном номере",
            button: true,
            accordionIndex: 3,
        },
        {
            headerTitle: "Выбрать свои даты",
            openGroup: false,
            cost: "$955",
            isCost: false,
            costRub: "88 815",
            subtitle: " Цена тура указана на 1 человека в двухместном номере",
            button: true,
            accordionIndex: 4,
        },
    ];
    return (
        <section>
            <Container>
                <div className="pt-10 flex md:flex-row flex-col  w-full justify-between gap-10">
                    <div className="w-full">
                        {accordionInfo.map((el, i) => (
                            <AccordionComp
                                fn={fn}
                                accordion={accordion}
                                {...el}
                                key={i}
                            />
                        ))}
                        <p className="py-4 text-sm max-w-[600px]">
                            Нажмите кнопку "Забронировать тур" вас переведёт на
                            страницу бронирования. Выберите тип тура:
                            индивидуальный или групповой. Заполните данные:
                            Ф.И.О. , контактные данные, дату начала тура,
                            количество человек с вами. После нажимаем кнопку
                            "Забронировать" и менеджер свяжется с вами.
                        </p>
                    </div>
                    <div className="md:max-w-[30%] md:max-h-[600px] max-h-[300px] relative overflow-hidden rounded-xl">
                        <img
                            src="https://turi-uzbekistana.ru/images/create-trip-photo.jpg"
                            alt="bgTour"
                            className="w-full h-full md:object-cover object-contain brightness-75"
                        />
                        <div className="absolute w-full top-0 left-0 p-[10px] text-white text-center">
                            <h2 className="text-xl py-5">
                                Маршрут не совсем подходит для вас?
                            </h2>
                            <p className="text-sm pb-[10px]">
                                Нажмите на кнопку ниже и оставьте заявку. Мы
                                создадим индивидуальный тур для вас!
                            </p>
                            <button className="bg-[#F44336] hover:bg-[#E53935] duration-150 p-[10px] w-full text-white rounded-full font-medium truncate">
                                Создать индивидуальный тур
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
