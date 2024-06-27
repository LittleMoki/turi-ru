import { Container } from "@/Components";

export const TourHotels = () => {
    return (
        <section className="pt-10">
            <Container>
                <h3 className="text-2xl text-center pb-4 font-medium">
                    Проживание
                </h3>
                <div className="flex gap-5 overflow-x-auto">
                    <div className="max-w-[400px] min-w-[300px]">
                        <div className="pb-3 overflow-hidden ">
                            <img
                                className="object-cover w-full h-full rounded-2xl"
                                src="https://turi-uzbekistana.ru/images/hotel/2023091540857865.jpg"
                                alt="bgHotel"
                            />
                        </div>
                        <p className="font-medium text-lg">
                            Bibi-Khanym Boutique Hotel (Bukhara)
                        </p>
                    </div>
                    <div className="max-w-[400px] min-w-[300px]">
                        <div className="pb-3 overflow-hidden ">
                            <img
                                className="object-cover w-full h-full rounded-2xl"
                                src="	https://turi-uzbekistana.ru/images/hotel/2023091540857865.jpg"
                                alt="bgHotel"
                            />
                        </div>
                        <p className="font-medium text-lg">
                            Bibi-Khanym Boutique Hotel (Bukhara)
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
};
