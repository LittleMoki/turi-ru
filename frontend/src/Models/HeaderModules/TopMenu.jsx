'use client'
import { WalletTopMenu } from '../../Components/WalletTopMenu/WalletTopMenu'
import Link from 'next/link'

export const TopMenu = () => {
	return (
		<div className='w-full py-3 bg-[#F0FDF4] relative z-0 lg:z-[21]'>
			<div className='container px-3 mx-auto'>
				<div className='flex w-full justify-end gap-3'>
					<Link href='/signup'>Авторизация</Link>|
					<Link href='/registration'>Регистрация</Link>|
					<WalletTopMenu />
				</div>
			</div>
		</div>
	)
}
