'use client'
import { BreadcrumbsComp, Container } from '@/Components'
import Link from 'next/link'
import { useState } from 'react'

const Countries = () => {
	const [activeCard, setActiveCard] = useState(null)

	const countryCards = [
		{
			img: 'https://turi-uzbekistana.ru/images/country/20231208500127172.jpg',
			country: 'Узбекистан',
		},
		{
			img: 'https://turi-uzbekistana.ru/images/country/202312082070860533.jpg',
			country: 'Казахстан',
		},
		{
			img: 'https://turi-uzbekistana.ru/images/country/20220604997345805.jpg',
			country: 'Таджикистан',
		},
		{
			img: 'https://turi-uzbekistana.ru/images/country/20231208114995576.png',
			country: 'Кыргызстан',
		},
		{
			img: 'https://turi-uzbekistana.ru/images/country/202206041954020456.jpg',
			country: 'Туркменистан',
		},
		{
			img: 'https://turi-uzbekistana.ru/images/country/20230306896779099.jpg',
			country: 'Грузия',
		},
		{
			img: 'https://turi-uzbekistana.ru/images/country/20231208856337873.jpg',
			country: 'Иран',
		},
	]

	const handleMouseEnter = index => {
		setActiveCard(index)
	}

	const handleMouseLeave = () => {
		setActiveCard(null)
	}
	const breadcrumbs = [
		<Link href='/' key='1'>
			Гланая
		</Link>,
		<Link href='/' key='2'>
			Страны
		</Link>,
	]
	return (
		<section className='py-5'>
			<Container>
				<BreadcrumbsComp breadcrumb={breadcrumbs} />
				<h1 className='text-3xl'>Страны</h1>
				<div className='grid max-[420px]:grid-cols-1 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 pt-5 gap-4'>
					{countryCards.map((el, i) => (
						<div
							onMouseEnter={() => handleMouseEnter(i)}
							onMouseLeave={handleMouseLeave}
							key={i}
							className='relative overflow-hidden rounded-2xl cursor-pointer'
						>
							<img src={el.img} alt='uzbekistan' />
							<div
								className={`absolute w-full h-full top-0 left-0 flex justify-center items-center text-white bg-black/40 duration-200 ${
									activeCard === i ? 'opacity-0' : 'opacity-1'
								}`}
							>
								<h2 className='text-2xl'>{el.country}</h2>
							</div>
							<div
								className={`absolute w-full h-full top-0 left-0 flex justify-center items-center text-white bg-black/40 duration-200 ${
									activeCard === i ? 'opacity-1' : 'opacity-0'
								}`}
							>
								<Link
									className='border border-white py-3 px-12 rounded-xl text-xl hover:bg-white/30'
									href='/country/uzbekistan'
								>
									Все города
								</Link>
							</div>
						</div>
					))}
				</div>
			</Container>
		</section>
	)
}

export default Countries
