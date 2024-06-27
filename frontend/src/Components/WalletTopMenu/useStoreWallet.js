import { create } from "zustand";

export const useStoreWallet = create((set) => ({
    menu: false,
    wallet: "Рубль",
    setMenu: (state) => set(() => ({ menu: state })),
    setWallet: (state) => set(() => ({ wallet: state })),
}));
