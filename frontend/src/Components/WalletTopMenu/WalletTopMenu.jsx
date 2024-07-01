"use client"
import {useStoreWallet} from "./useStoreWallet";
import {IoIosArrowDown} from "react-icons/io";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import {useState} from "react";


export const WalletTopMenu = () => {
    const {wallet, setWallet} = useStoreWallet();
    const [icon, setIcon] = useState(false)

    return (
        <Dropdown onOpenChange={e => setIcon(e)}>
            <DropdownTrigger>
                <Button
                    color='c'
                    endContent={<IoIosArrowDown className={icon ? "rotate-0" : "rotate-180"}/>}
                >
                    {wallet}
                </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Dunamic exchanges">
                <DropdownItem onClick={() => setWallet("Рубль")
                } key="rub">Рубль</DropdownItem>
                <DropdownItem onClick={() => setWallet("Сум")
                } key="som">Сум</DropdownItem>
                <DropdownItem onClick={() => setWallet("Евро")
                } key="euro">Евро</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};
