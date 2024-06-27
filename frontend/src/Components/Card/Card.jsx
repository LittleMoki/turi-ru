import {
    FaCalendarAlt,
    FaShieldAlt,
    FaCompass,
    FaMapMarkerAlt,
} from "react-icons/fa";

export const Card = ({
    link,
    discount,
    tourLabel,
    title,
    img,
    tourGuaranted,
    tourTypeName,
    tourCountry,
    tourDay,
    tourPlace,
    tourPiceDiscount,
    tourPrice,
    tourPriceRub,
}) => {
    return (
        <div className="relative bg-white rounded-2xl overflow-hidden  shadow-lg">
            <a className="flex flex-col justify-between" href={link}>
                {discount && (
                    <div className="bg-[#dc3545] text-white text-xs font-bold absolute left-0 top-[15px] py-[3px] px-[6px] z-10 rounded-r-2xl">
                        - {discount} %
                    </div>
                )}
                {tourLabel && (
                    <div className="absolute top-[15px] right-0 bg-[#ffeb3b] text-black rounded-l-2xl z-10 text-xs p-[5px] ">
                        {tourLabel}
                    </div>
                )}
                <div className="relative rounded-2xl overflow-hidden">
                    <h2 className="absolute w-full left-0 bottom-0 text-white px-[10px] pt-[10px] pb-[20px] text-base font-extrabold reconmended_text">
                        {title}
                    </h2>
                    <img
                        className="object-cover aspect-[4/3]"
                        src={img}
                        alt="card_img"
                    />
                </div>
                <div className="grid grid-cols-2 items-center relative bottom-[14px] px-2 gap-2">
                    <div className="text-white bg-[#37af24] flex items-center justify-center gap-1 rounded-2xl text-xs font-bold py-[3px] px-[10px]">
                        <FaShieldAlt className="min-w-[20px]" />
                        <p className="truncate">{tourGuaranted}</p>
                    </div>
                    <div className="bg-[#dcfce7] flex items-center justify-center gap-1 rounded-2xl text-xs font-bold py-[3px] px-[10px]  ">
                        <FaCompass className="min-w-[20px]" />
                        <p className="truncate">{tourTypeName}</p>
                    </div>
                </div>
                <div className="p-[10px] text-sm font-bold">{tourCountry}</div>
                <div className="flex text-sm text-[#666] p-[10px] gap-[10px]">
                    <div className="flex items-center gap-1">
                        <FaCalendarAlt /> {tourDay}дней
                    </div>
                    <div className="flex items-center gap-1">
                        <FaMapMarkerAlt /> {tourPlace}места
                    </div>
                </div>
                <div className="flex flex-col bottom-0 right-0 text-right text-2xl p-[10px] font-semibold absolute">
                    <s className="font-normal text-sm text-[#212529bf]">
                        от ${tourPiceDiscount}
                    </s>
                    от ${tourPrice}
                    <span className="text-[#666] text-base font-semibold">
                        ({tourPriceRub} ₽)
                    </span>
                </div>
            </a>
        </div>
    );
};
