'use client'
import { useState } from 'react'

import { BreadcrumbsComp } from '@/Components'
import { TourRoute } from '@/Models/TourModule'
import Link from 'next/link'
import { TourApplication } from '../../Models/TourModule/TourApplication'
import { TourBook } from '../../Models/TourModule/TourBook'
import { TourDescription } from '../../Models/TourModule/TourDescription'
import { TourForm } from '../../Models/TourModule/TourForm'
import { TourFormPopup } from '../../Models/TourModule/TourFormPopup'
import { TourHotels } from '../../Models/TourModule/TourHotels'
import { TourInclude } from '../../Models/TourModule/TourInclude'
import { TourInfoRoute } from '../../Models/TourModule/TourInfoRoute'
import { TourOrganization } from '../../Models/TourModule/TourOrganization'
import { TourPopular } from '../../Models/TourModule/TourPopular'
import { TourSwiper } from '../../Models/TourModule/TourSwiper'

const Tour = () => {
	const cards = [
		{
			link: '#!',
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
			link: '#!',
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
			link: '#!',
			discount: '10',
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
	]
	const sliderImages = [
		{ image: 'https://swiperjs.com/demos/images/nature-1.jpg' },
		{ image: 'https://swiperjs.com/demos/images/nature-2.jpg' },
		{ image: 'https://swiperjs.com/demos/images/nature-3.jpg' },
		{ image: 'https://swiperjs.com/demos/images/nature-4.jpg' },
		{ image: 'https://swiperjs.com/demos/images/nature-5.jpg' },
	]
	const breadcrumbs = [
		<Link key='1' href='/'>
			Главная
		</Link>,
		<Link key='2' href='/'>
			Туры
		</Link>,
		<Link key='3' href='/'>
			Индивидуальные туры в Узбекистан
		</Link>,
		<Link key='4' href='/'>
			Тур в Узбекистан «Четыре жемчужины Узбекистана» Премиальный
		</Link>,
	]
	// Accordion function for open and close
	const [accordion, setAccordion] = useState()

	const onAccordionChange = panel => e => {
		setAccordion(prevPanel => (prevPanel === panel ? false : panel))
	}

	// Application function for close and open as popUp
	const [application, setApplication] = useState(false)
	const applicationPopup = () => {
		setApplication(!application)
	}
	return (
		<>
			{/* BreadCrumbsComp */}
			<BreadcrumbsComp breadcrumb={breadcrumbs} />
			{/* TourApplication */}
			<TourApplication fn={applicationPopup} />
			<section className='container max-w-[1320px] px-3 mx-auto flex gap-5 flex-col lg:flex-row pt-5'>
				{/* TourSwiper */}
				<TourSwiper image={sliderImages} />
				{/* TourInfoRoute */}
				<TourInfoRoute />
			</section>
			{/* TourDescription */}
			<TourDescription />
			{/* TourForm */}
			<TourForm />
			{/* TourRoute */}
			<TourRoute fn={onAccordionChange} accordion={accordion} />
			{/* TourInclude */}
			<TourInclude />
			{/* TourHotels */}
			<TourHotels />
			{/* TourBook */}
			<TourBook fn={onAccordionChange} accordion={accordion} />
			{/* TourOrganization */}
			<TourOrganization />
			<div className='container max-w-[1320px] px-3 mx-auto pt-10'>
				<h3 className='text-2xl font-medium text-center'>
					Отзывы наших туристов
				</h3>
				Here Will be Reviews
			</div>
			{/* TourPopular */}
			<TourPopular cards={cards} />
			{/* TourFormPopup */}
			<TourFormPopup fn={applicationPopup} application={application} />
		</>
	)
}

export default Tour
