import { Container } from "@/Components";

export const AboutTeam = () => {
    const AboutTeamCard = [
        {
            img: "https://turi-uzbekistana.ru/images/about/20211028160059.jpg",
            name: "Тимур Алимов",
            work: "CEO Minzifa Travel",
            todo: "Управляет всем что есть в офисе и вне офиса",
        },
        {
            img: "https://turi-uzbekistana.ru/images/about/20211028160059.jpg",
            name: "Тимур Алимов",
            work: "CEO Minzifa Travel",
            todo: "Управляет всем что есть в офисе и вне офиса",
        },
        {
            img: "https://turi-uzbekistana.ru/images/about/20211028160059.jpg",
            name: "Тимур Алимов",
            work: "CEO Minzifa Travel",
            todo: "Управляет всем что есть в офисе и вне офиса",
        },
        {
            img: "https://turi-uzbekistana.ru/images/about/20211028160059.jpg",
            name: "Тимур Алимов",
            work: "CEO Minzifa Travel",
            todo: "Управляет всем что есть в офисе и вне офиса",
        },
        {
            img: "https://turi-uzbekistana.ru/images/about/20211028160059.jpg",
            name: "Тимур Алимов",
            work: "CEO Minzifa Travel",
            todo: "Управляет всем что есть в офисе и вне офиса",
        },
        {
            img: "https://turi-uzbekistana.ru/images/about/20211028160059.jpg",
            name: "Тимур Алимов",
            work: "CEO Minzifa Travel",
            todo: "Управляет всем что есть в офисе и вне офиса",
        },
    ];
    return (
        <section className="py-10">
            <Container>
                <h2 className="text-center text-3xl pb-5">Наша команда</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {AboutTeamCard.map((el, i) => (
                        <div
                            className="overflow-hidden rounded-md bg-white border"
                            key={i}
                        >
                            <img src={el.img} alt="aboutTeamImage" />
                            <div className="py-3 px-6 text-center flex flex-col items-center gap-1">
                                <h3 className="">{el.name}</h3>
                                <small className="opacity-70">{el.work}</small>
                                <small>{el.todo}</small>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
