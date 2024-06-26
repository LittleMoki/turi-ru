import { Container } from "@/Components";
import { Head } from "@inertiajs/react";

const BookingRulesTour = () => {
    return (
        <section className="py-10">
            <Container>
                <Head title="Booking Rules Tour" />
                <h1 className="text-center md:text-3xl text-2xl font-medium">
                    Условия и правила бронирования туров и отдыха в Узбекистане.
                </h1>
                <div className="text-center pt-10">
                    <p>Публичная оферта</p>
                    <strong>Политика отмены / Сроки и условия </strong>
                </div>
                <p>
                    Пожалуйста, внимательно прочитайте Правила и условия,
                    описанные ниже.
                </p>
                <p className="pt-4">
                    Бронируя тур агенством MinizfaTravel by FE "Unique Travel",
                    лицензия T-0087 от национальной компании "Узбектуризм",
                    после ознакомления с предоставляемыми услугами и после
                    проверки наличия тур пакета (услуги) в продолжение процессa
                    бронирования, вам будет выслан файл в формате PDF с деталями
                    тура ( услуг ) и условий в виде формы бронирования, так же
                    эту информацию вы можете скачать в личном кабинете туриста.
                    Основанием для заключения договора по оказанию услуг и его
                    подтверждения является невозмещаемый депозит по
                    забронированным услуги (турпакет, тур услуги) и
                    подтверждение о его получении со стороны Компании. В этом
                    случае считается, что вы согласны с условиями бронирования,
                    и ваш заказ будет принят. Если у вас есть какие-либо вопросы
                    или особый запрос относительно этих условий, вы должны
                    обсудить и решить этот вопрос с MINZIFATRAVEL до
                    предoставления этих документов.
                </p>
                <h3 className="md:text-2xl text-xl pt-3 font-medium">
                    Бронирование
                </h3>
                <p className="pt-2">
                    Заказчик должен предоставить депозит не менее 30% от
                    стоимости тура. Заполненная форма бронирования и подписанная
                    декларация необходимы для подтверждения заказа.
                </p>
                <p className="pt-2">
                    Баланс стоимости тура MINZIFATRAVEL требуется оплатить, по
                    крайней мере, за 40 дней до начала тура. Если Вы заказываете
                    в течение 40 дней до начала тура, то должна быть оплачена
                    вся сумма предоставляемых услуг, турпакета. Подробная
                    информация о вашем страхавом полюсе путешественникa должна
                    быть предоставлена в момент окончательного платежа.
                </p>
                <h3 className="md:text-3xl text-2xl font-semibold pt-3">
                    Аннулирование
                </h3>
                <p className="pt-2">
                    Согласно нашим условиям бронирования, наши сборы за отмену
                    бронирования составляют:
                </p>
                <ul className="pt-2 pl-8 list-disc">
                    <li>
                        30 дней и более до вылета - 30% от стоимости тура,
                        потеря депозита
                    </li>
                    <li>
                        от 29 до 15 дней до вылета - 50% от стоимости тура *
                    </li>
                    <li>от 14 до 7 дней до вылета -70% от стоимости тура *</li>
                    <li>
                        6 и менее дней до вылета - 100% от стоимости тура *{" "}
                    </li>
                </ul>
                <p className="pt-2">
                    Билеты, кроме тех, которые указаны в маршруте тура
                    MINZIFATRAVEL, не включены в стоимость. Любые условия
                    отмены, введенные авиакомпанией, следует уточнить с вашим
                    агентом по бронированию авиабилетов.
                </p>
                <p>
                    MINZIFATRAVEL стремится тщательно следить за развитием
                    событий в Центральной Азии. Если из-за стихийных бедствий
                    или политической нестабильности и т.д., в целях безопасности
                    будет отменён тур, MINZIFATRAVEL вернёт вам все деньги,
                    уплаченные MINZIFATRAVEL за минус административный сбор в
                    размере $ 250 за 1 человека. А также возможные другие
                    расходы, например, отмена полёта, штрафов, затраты и т.д.
                    регистрация и виза на паспорт не возвращается через
                    MINZIFATRAVEL.
                </p>
                <h3 className="md:text-2xl text-xl pt-3 font-medium">
                    Сопровождаемые экскурсии
                </h3>
                <p className="pt-2">
                    Любые дополнительные услуги, не указанные в маршруте, такие
                    как прачечная, чаевые, визы и регистрация паспорта,
                    дополнительные входные билеты, не включенные в тур, питание,
                    дополнительных экскурсий и т.д. , будут оплачены
                    самостоятельно клиентом. Если вы путешествуете в одиночку и
                    указали, что вы хотели бы делить комнату, MINZIFATRAVEL
                    постарается удовлетворить эту просьбу. Если, однако, не
                    возможно будет организовать данную комнату, вы должны
                    оплатить за одноместный номер дополнительно согласно
                    тарифам.
                </p>
            </Container>
        </section>
    );
};

export default BookingRulesTour;
