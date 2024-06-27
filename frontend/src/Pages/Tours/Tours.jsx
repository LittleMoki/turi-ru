'use client'

import { BreadcrumbsComp, Card, Container } from '@/Components'
import Link from 'next/link'
import { ToursFilter } from '../../Models/ToursModules/ToursFilter'
import { ToursTop } from '../../Models/ToursModules/ToursTop'

const Tours = () => {
	const cards = [
		{
			link: '/tour/group/may-tour',
			discount: '14',
			img: 'https://turi-uzbekistana.ru/images/tour/202403121634156765.webp',
			title: 'Групповой тур в Узбекистан на майские праздники 2024',
			tourGuaranted: 'Тур гарантирован!',
			tourTypeName: ' Туры в Узбекистан весной 2024',
			tourCountry: 'Узбекистан',
			tourDay: '8',
			tourPlace: '4',
			tourPiceDiscount: '1105',
			tourPrice: '955',
			tourPriceRub: '88 815',
		},
		{
			link: '/tour/group/may-tour',
			tourLabel: 'Открыт набор',
			img: 'https://turi-uzbekistana.ru/images/tour/202403121634156765.webp',
			title: 'Групповой тур в Узбекистан на майские праздники 2024',
			tourGuaranted: 'Тур гарантирован!',
			tourTypeName: ' Туры в Узбекистан весной 2024',
			tourCountry: 'Узбекистан',
			tourDay: '8',
			tourPlace: '4',
			tourPiceDiscount: '1105',
			tourPrice: '955',
			tourPriceRub: '88 815',
		},
		{
			link: '/tour/group/may-tour',
			discount: '10',
			tourLabel: 'Топ',
			img: 'https://turi-uzbekistana.ru/images/tour/202403121634156765.webp',
			title: 'Групповой тур в Узбекистан на майские праздники 2024',
			tourGuaranted: 'Тур гарантирован!',
			tourTypeName: ' Туры в Узбекистан весной 2024',
			tourCountry: 'Узбекистан',
			tourDay: '8',
			tourPlace: '4',
			tourPiceDiscount: '1105',
			tourPrice: '955',
			tourPriceRub: '88 815',
		},
	]
	const breadcrumbs = [
		<Link key='1' href='/'>
			Главная
		</Link>,
		<Link key='2' href='/'>
			Туры
		</Link>,
	]
	return (
		<>
			<ToursTop title={'Все туры'} />
			<Container>
				<section className='md:flex-row flex-col gap-10 flex py-5'>
					<div>
						<BreadcrumbsComp breadcrumb={breadcrumbs} />
						<ToursFilter />
					</div>
					<div>
						<h3 className='text-2xl pb-3'>Найдено {cards.length} тура</h3>
						<div className='grid gap-5 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
							{cards.map((el, i) => (
								<Card {...el} key={i} />
							))}
						</div>
					</div>
				</section>
			</Container>
		</>
	)
}
export default Tours
