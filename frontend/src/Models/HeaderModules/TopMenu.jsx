'use client'
import {SignIn} from '@/UI/SignIn'
import SignUp from '@/UI/SignUp'
import {WalletTopMenu} from '@/Components'

export const TopMenu = () => {
    return (
        <div className='w-full py-3 bg-[#F0FDF4] relative z-0 lg:z-[21]'>
            <div className='container px-3 mx-auto'>
                <div className='flex w-full justify-end gap-2'>
                    <SignIn/>
                    <SignUp/>
                    <WalletTopMenu/>
                </div>
            </div>
        </div>
    )
}
