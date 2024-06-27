import { AccordionComp, Container } from "@/Components";

export const TourRoute = ({ fn, accordion }) => {
    const accordionItem = [
        {
            headerTitle: "Бухара тур",
            headerBoldTitle: "День 1",
            subtitle: "Some text",
            accordionIndex: 1,
        },
        {
            headerTitle: "Бухара загородная экскурсия - переезд в Самарканд",
            headerBoldTitle: "День 2",
            subtitle: "Some text",
            accordionIndex: 2,
        },
    ];
    return (
        <section className="pt-16">
            <Container>
                <h3 className="md:text-2xl text-xl text-center pb-5">
                    Маршрут тура
                </h3>
                <div className="flex justify-end pb-4">
                    <button className="bg-[#495057] rounded-[5px] px-5 py-3 text-white">
                        Показать все
                    </button>
                </div>
                {accordionItem.map((el, i) => (
                    <AccordionComp
                        fn={fn}
                        accordion={accordion}
                        {...el}
                        key={i}
                    />
                ))}
            </Container>
        </section>
    );
};
