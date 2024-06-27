import { Accordion, AccordionItem, Checkbox, Slider } from '@nextui-org/react'

const accordionData = [
	{ id: 1, title: 'Цена', content: 'Диапазон цен' },
	{ id: 2, title: 'Длительность', content: 'Диапазон длительности' },
	{
		id: 3,
		title: 'По сезону',
		content: ['Зимой', 'Весной', 'Летом', 'Осенью'],
	},
	{
		id: 4,
		title: 'По странам',
		content: [
			'Узбекистан',
			'Казахстан',
			'Таджикистан',
			'Кыргызстан',
			'Туркменистан',
			'Грузия',
			'Иран',
		],
	},
	{
		id: 5,
		title: 'По типу тура',
		content: ['Групповые туры', 'Индивидуальные туры', 'Короткие туры'],
	},
	{
		id: 6,
		title: 'Комфорт',
		content: ['Бутик отели', '3 звезды', '4 звезды', '5 звезд'],
	},
]

export const ToursFilter = () => {
	return (
		<Accordion className='md:w-[260px] w-full' variant='shadow'>
			<AccordionItem key='1' aria-label='Цена' title='Цена'>
				<Slider
					label=' '
					step={50}
					minValue={0}
					maxValue={6951}
					defaultValue={[0, 6951]}
					formatOptions={{ style: 'currency', currency: 'USD' }}
					className='w-full'
				/>
			</AccordionItem>
			<AccordionItem key='2' aria-label='Длительность' title='Длительность'>
				<Slider
					label=' '
					step={1}
					minValue={0}
					maxValue={21}
					defaultValue={[0, 21]}
					className='w-full'
				/>
			</AccordionItem>
			<AccordionItem key='3' aria-label='По сезону' title='По сезону'>
				<div className='flex flex-col items-start gap-2'>
					<Checkbox>Зимой</Checkbox>
					<Checkbox>Весной</Checkbox>
					<Checkbox>Летом</Checkbox>
					<Checkbox>Осенью</Checkbox>
				</div>
			</AccordionItem>
			<AccordionItem key='4' aria-label='По странам' title='По странам'>
				<div className='flex flex-col items-start gap-2'>
					<Checkbox>Узбекистан</Checkbox>
					<Checkbox>Казахстан</Checkbox>
					<Checkbox>Таджикистан</Checkbox>
					<Checkbox>Кыргызстан</Checkbox>
					<Checkbox>Туркменистан</Checkbox>
					<Checkbox>Грузия</Checkbox>
					<Checkbox>Иран</Checkbox>
				</div>
			</AccordionItem>
			<AccordionItem key='5' aria-label='По типу тура' title='По типу тура'>
				<div className='flex flex-col items-start gap-2'>
					<Checkbox>Групповые туры </Checkbox>
					<Checkbox>Групповые туры </Checkbox>
					<Checkbox>Групповые туры </Checkbox>
					<Checkbox>Групповые туры </Checkbox>
					<Checkbox>Групповые туры </Checkbox>
					<Checkbox>Групповые туры </Checkbox>
					<Checkbox>Групповые туры </Checkbox>
				</div>
			</AccordionItem>
			<AccordionItem key='6 ' aria-label='Комфорт' title='Комфорт'>
				<div className='flex flex-col items-start gap-2'>
					<Checkbox>Бутик отели</Checkbox>
					<Checkbox>3 звезды </Checkbox>
					<Checkbox>4 звезды </Checkbox>
					<Checkbox>5 звезды </Checkbox>
				</div>
			</AccordionItem>
		</Accordion>
	)
}
