import { Container } from '@/Components'

export const AboutStatistic = () => {
	const AboutCards = [
		{
			img: 'aboutImage1',
			title: 'Опыт с 2011',
			descrition: 'создаем незабываемые путешествия.',
		},
		{
			img: 'aboutImage2',
			title: '1010+',
			descrition: 'организованных туров',
		},
		{
			img: 'aboutImage3',
			title: '360+',
			descrition: 'отзывов на tripadvisor.com',
		},
		{
			img: 'aboutImage4',
			title: 'Опыт с 2011',
			descrition: 'довольных туристов',
		},
	]
	return (
		<Container>
			<section className='bg-white max-w-[800px] rounded-2xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 items-start justify-center py-5 my-5'>
				{AboutCards.map((el, i) => (
					<div key={i} className='flex flex-col items-center text-center gap-1'>
						<img
							className='object-contain w-[170px] h-[100px] pb-3'
							src={el.img}
							alt='aboutIcon'
						/>
						<p>{el.title}</p>
						<small>{el.descrition}</small>
					</div>
				))}
			</section>
		</Container>
	)
}
