import Link from 'next/link'
import { AiOutlineGlobal } from 'react-icons/ai'
import { FaCalendar } from 'react-icons/fa'
import { IoSearch } from 'react-icons/io5'

export const HeroBlock = () => {
	return (
		<section className='hero h-[450px] flex flex-col justify-center relative text-white'>
			<div className='container max-w-[1140px] px-2 flex flex-col gap-5 items-start mx-auto'>
				<h1 className='sm:text-4xl text-2xl font-bold text-[#ffeb3b] max-w-[1140px]'>
					Экскурсионные туры по Узбекистану и Центральной Азии от Экспертов по
					путешествиям
				</h1>
				<h2 className='text-base font-semibold'>
					История, культура, природа и гастрономические удовольствия ждут вас в
					путешествиях.
				</h2>
				<div className='flex lg:w-auto w-full flex-col items-end'>
					<div className='text-[#475566] rounded-3xl lg:rounded-full w-full gap-3 p-5 bg-[#ffffff99]  grid lg:grid-cols-3 grid-cols-1'>
						<div className='flex items-center bg-white px-5 rounded-3xl'>
							<AiOutlineGlobal />
							<select className='border-0 w-full'>
								<option value='default'>Куда вы хотите?</option>
								<option value='uzb'>Узбекистан</option>
								<option value='kaz'>Казахстан</option>
							</select>
						</div>
						<div className='flex items-center bg-white px-5 rounded-3xl'>
							<FaCalendar />
							<select className='border-0 w-full'>
								<option value='default'>В каком сезоне?</option>
								<option value='uzb'>Зимой</option>
								<option value='val'>Весной</option>
								<option value='val'>Летом</option>
								<option value='val'>Осенью</option>
							</select>
						</div>
						<button className='bg-[#37af24] text-white flex items-center justify-center py-2 text-lg font-normal rounded-full'>
							<IoSearch /> Найти
						</button>
					</div>
					<Link className='pt-3 pr-5' href='/'>
						Смотреть туры
					</Link>
				</div>
			</div>
		</section>
	)
}
