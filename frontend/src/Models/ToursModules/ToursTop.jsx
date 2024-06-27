import { Container } from "@/Components";

export const ToursTop = ({ title }) => {
    return (
        <section className="bg-[#F0FDF4]">
            <Container>
                <div className="md:flex-row flex-col gap-10 flex justify-between items-center py-10">
                    <h1 className="text-4xl w-full">{title}</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3 items-center">
                                <div className="flex justify-center items-center rounded-xl text-lg bg-[#BBF7D0] min-w-[48px] min-h-[48px]">
                                    1
                                </div>
                                <div className="w-full h-1 bg-[#BBF7D0]"></div>
                            </div>
                            <div>
                                <h2>Выберите тур</h2>
                                <small className="text-xs">
                                    Авторские туры - неизведанные маршруты и
                                    уникальные приключения от настоящих жителей
                                    всех станов любящих свою страну.
                                </small>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3 items-center">
                                <div className="flex justify-center items-center rounded-xl text-lg bg-[#BBF7D0] min-w-[48px] min-h-[48px]">
                                    2
                                </div>
                                <div className="w-full h-1 bg-[#BBF7D0]"></div>
                            </div>
                            <div>
                                <h2>Уточните все детали</h2>
                                <small className="text-xs">
                                    Расспросите обо всем важном от менеджеров и
                                    авторов туров напрямую. Доступны онлайн.
                                </small>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3 items-center">
                                <div className="flex justify-center items-center rounded-xl text-lg bg-[#BBF7D0] min-w-[48px] min-h-[48px]">
                                    3
                                </div>
                                <div className="w-full h-1 bg-[#BBF7D0]"></div>
                            </div>
                            <div>
                                <h2>Забронируйте место</h2>
                                <small className="text-xs">
                                    Мы гарантируем лучшее качество, безопасность
                                    платежей и гибкую политику отмен, с услугой
                                    “Несгораемый депозит“.
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
