import { useStoreWallet } from "./useStoreWallet";
import { IoIosArrowDown } from "react-icons/io";

export const WalletTopMenu = () => {
    const { menu, setMenu, wallet, setWallet } = useStoreWallet();

    return (
        <div className="relative w-16 flex items-center justify-between">
            <button
                onClick={() => setMenu(!menu)}
                className="flex items-center gap-2"
            >
                {wallet}
            </button>
            <IoIosArrowDown className={menu ? "rotate-0" : "rotate-180"} />
            <div
                className={`absolute top-full right-0 flex flex-col bg-white border rounded-lg z-30 transition-transform ${
                    menu ? "scale-1" : "scale-0"
                }`}
            >
                <a
                    onClick={() => {
                        setWallet("Рубль");
                        setMenu(false);
                    }}
                    className="pr-16 pl-3 py-3 hover:bg-slate-100"
                    href="#!"
                >
                    Рубль
                </a>
                <a
                    onClick={() => {
                        setWallet("Сум");
                        setMenu(false);
                    }}
                    className="pr-16 pl-3 py-3 hover:bg-slate-100"
                    href="#!"
                >
                    Сум
                </a>
                <a
                    onClick={() => {
                        setWallet("Евро");
                        setMenu(false);
                    }}
                    className="pr-16 pl-3 py-3 hover:bg-slate-100"
                    href="#!"
                >
                    Евро
                </a>
            </div>
        </div>
    );
};
