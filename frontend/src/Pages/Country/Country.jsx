'use client'
import { ArticleCard, BreadcrumbsComp, Container } from '@/Components'
import Link from 'next/link'
import { useState } from 'react'

const Country = () => {
	const bgUzb =
		'https://turi-uzbekistana.ru/images/country/20231208500127172.jpg'
	const exapleBg =
		'https://turi-uzbekistana.ru/images/country/20231208500127172.jpg'
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
	const cards = [
		{
			img: 'https://turi-uzbekistana.ru/images/news/202309251428152727.jpg',
			country: 'Узбекистан',
			date: '23 марта 2024',
			views: '3121',
			title:
				'Откройте для себя Узбекистан: 7-дневное приключение с Minzifa Travel',
			description:
				'Исследуйте красоту и культуру Узбекистана с нашим эксклюзивным 7-дневным туром. Узнайте цены и особенности путешествия от Minzifa Travel.',
		},
		{
			img: 'https://turi-uzbekistana.ru/images/news/202309251428152727.jpg',
			country: 'Узбекистан',
			date: '23 марта 2024',
			views: '3121',
			title:
				'Откройте для себя Узбекистан: 7-дневное приключение с Minzifa Travel',
			description:
				'Исследуйте красоту и культуру Узбекистана с нашим эксклюзивным 7-дневным туром. Узнайте цены и особенности путешествия от Minzifa Travel.',
		},
		{
			img: 'https://turi-uzbekistana.ru/images/news/202309251428152727.jpg',
			country: 'Узбекистан',
			date: '23 марта 2024',
			views: '3121',
			title:
				'Откройте для себя Узбекистан: 7-дневное приключение с Minzifa Travel',
			description:
				'Исследуйте красоту и культуру Узбекистана с нашим эксклюзивным 7-дневным туром. Узнайте цены и особенности путешествия от Minzifa Travel.',
		},
	]
	const breadcrumbs = [
		<Link key='1' href='/'>
			Главная
		</Link>,
		<Link key='2' href='/'>
			Страны
		</Link>,
		<Link key='3' href='/'>
			Узбекистан
		</Link>,
	]
	const [activeCard, setActiveCard] = useState(null)

	const handleMouseEnter = index => {
		setActiveCard(index)
	}

	const handleMouseLeave = () => {
		setActiveCard(null)
	}
	return (
		<section>
			<div className="bg-[url('https://turi-uzbekistana.ru/images/country/20231208500127172.jpg')] bg-no-repeat bg-cover bg-center bg-fixed h-[400px] relative">
				<div className='absolute flex justify-center items-center w-full h-full bg-black/60'>
					<h1 className='text-white md:text-4xl sm:text-3xl text-2xl px-3 text-center'>
						Узбекистан - история, традиции, туры, фотографии,
						достопримечательности
					</h1>
				</div>
			</div>
			<div>
				<Container>
					<BreadcrumbsComp breadcrumb={breadcrumbs} />
					<p>
						Узбекистан расположен в самом сердце Центральной Азии. Природный
						ландшафт страны поражает своим разнообразием. Это и высокие горы с
						заснеженными вершинами, и утопающие в зелени плодородные долины, и
						бескрайние степи с поющими ветрами, и пустыни, где в песках
						рождаются легенды. В нашей стране бережно хранят традиции, обычаи и
						культурное наследие своих предков. Памятники древнего зодчества и
						архитектурные сооружения и здания нашего времени гармонично
						сочетаются в облике современных узбекских городов. А узбекский народ
						во все времена славился своим гостеприимством и доброжелательностью.
					</p>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12262088.516174925!2d64.608575!3d41.381168!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b20a5d676b1%3A0xca0a6dad7e841e20!2z0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2sru!4v1711883350508!5m2!1sru!2sru'
						className='w-full h-[400px] py-3'
					/>
					<h3 className='text-2xl'>История Узбекистана</h3>
					<p className='py-3'>
						стория Узбекистана корнями уходит в глубину веков. Узбекская земля
						помнит много исторических сражений и походов. Этот край всегда
						привлекал завоевателей - Александр Македонский, более известный в
						Азии, как Искандер, армии персидских правителей, полчища Чингисхана.
						На протяжении столетий многие народности, как кочевые, так и
						оседлые, сменяли друг друга, устраивали поселения, создавали семьи,
						перенимали обычаи и традиции. Каждое поколение оставило после себя
						свое культурное наследие. Такие разные историко-культурные
						направления сплелись воедино в прекрасную восточную мелодию.
						Современники получили бесценное богатство - памятники древней
						архитектуры и зодчества, национальная музыка и танцы, литература и
						поэзия, философские труды и научные открытия. А сколько еще
						удивительных секретов таит в себе земля, расположенная между
						Амударьей и Сырдарьей? Приезжайте в Узбекистан! И кто знает, может
						именно вы раскроете очередную загадку. И возможно именно с вами
						древние города поделятся своими многочисленными тайнами.
					</p>
					<div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
						<img
							src='https://turi-uzbekistana.ru/userfiles/%D1%88%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD8(1).jpg'
							alt='bgUzb'
						/>
						<img
							src='https://turi-uzbekistana.ru/userfiles/%D1%88%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD8(1).jpg'
							alt='bgUzb'
						/>
						<img
							src='https://turi-uzbekistana.ru/userfiles/%D1%88%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD8(1).jpg'
							alt='bgUzb'
						/>
					</div>
					<h3 className='text-2xl pt-3 pb-1'>
						Чем может удивить вас Узбекистан?
					</h3>
					<ul className='list-disc pl-[1rem]'>
						<li>
							<a className='underline' href='#!'>
								Узнайте почему туристы так любят Бухару
							</a>
						</li>
						<li>
							<a className='underline' href='#!'>
								Узнайте почему туристы так любят Бухару
							</a>
						</li>
						<li>
							<a className='underline' href='#!'>
								Узнайте почему туристы так любят Бухару
							</a>
						</li>
					</ul>
					<h3 className='text-2xl py-3'>Территория Узбекистана</h3>
					<img className='w-full h-full object-cover' src={bgUzb} alt='bgUzb' />
					<p className='py-3'>
						Государство Узбекистан расположено в Средней Азии. Столица - город
						Ташкент. Государственный строй - президентская республика.
						Северо-восточная часть страны соседствует с Казахстаном, восточная и
						юго-восточная части страны имеют границы с двумя республиками:
						Кыргызстаном и Таджикистаном, западная часть Узбекистана имеет
						границу с Туркменией, а южная часть соседствует с Афганистаном.
						Протяженность государственных границ насчитывает 6 221 километров.
						Территория: 448,9 тыс. кв.км.
					</p>
					<p>
						По административному устройству территория Узбекистана разделена на
						двенадцать областей: Андижанскую, Бухарскую, Джизакскую, Ферганскую,
						Самаркандскую, Сурхандарьинскую, Сырдарьинскую, Навоинскую,
						Наманганскую, Хорезмскую, Кашкадарьинскую и Ташкентскую.
						Каракалпакия, как автономная республика, так же входит в состав
						республики.
					</p>
					<h3 className='text-2xl py-3'>Природа Узбекистана</h3>
					<p>
						<strong>Природа Узбекистана</strong> - это сочетание контрастных
						ландшафтов. Благодаря территориальной масштабности региона, равнины
						и долины сменяются горными массивами, а леса и полесья – пустынями и
						полупустынями. Пустыни Кызылкум и Каракумы добавляют таинственность
						в замысловатый рельефный рисунок страны. Климат резко
						континентальный. Осадков выпадает немного. Влажность воздуха
						относительно низкая. Разнообразность природного ландшафта
						обуславливает богатые флору и фауну Узбекистана. Растительный мир
						региона насчитывает более 6 000 видов растений. Из них только 3 700
						видов высших растений, пятая часть которых – это эндемики, т.е.
						растения которые больше нигде не встречаются. Фауна страны
						насчитывает 600 видов позвоночных, более 90 видов млекопитающих,
						более 40 видов рыб. Для охраны богатого животного и растительного
						мира в Узбекистане созданы заповедники, национальные парки,
						заказники.
					</p>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5'>
						<img src={exapleBg} alt='bgUzb' />
						<img src={exapleBg} alt='bgUzb' />
						<img src={exapleBg} alt='bgUzb' />
					</div>
					<h3 className='text-2xl'>Памятка для активных туристов</h3>
					<ul className='list-disc pl-[2rem]'>
						<li>
							<a className='underline' href='#!'>
								Погода и климат в Узбекистане
							</a>
						</li>
						<li>
							<a className='underline' href='#!'>
								Погода и климат в Узбекистане
							</a>
						</li>
						<li>
							<a className='underline' href='#!'>
								Погода и климат в Узбекистане
							</a>
						</li>
					</ul>
					<h3 className='text-2xl py-3'>Туры в Узбекистан</h3>
					<p>
						Ежегодно узбекистанцы принимают сотни тысяч туристов. Благодаря
						местным климатическим условиям интерес к отдыху в Узбекистане
						проявляется не только весной и летом, но и в осенние и зимние
						месяцы. Традиционно иностранных гостей привлекают памятники древней
						архитектуры и зодчества, богатое культурное и историческое наследие
						страны. Однако, в Узбекистане также расположены лечебницы и
						санатории, где можно отдохнуть и поправить свое здоровье. Туры в
						Узбекистан это не просто один из способов провести отпуск, а еще и
						возможность познать чужую культуру и историю, познакомиться с
						обычаями и традициями самобытного узбекского народа. Многих людей
						привлекает активный вид отдыха в Узбекистане. Если вы любите
						приключения и ведете активный образ жизни, то в наших санаториях и
						домах отдыха, расположенных в горных районах, на территориях близ
						озер и рек можно с удовольствием и с пользой для своего здоровья
						провести время.
					</p>
					<h3 className='text-2xl pt-3'>Информация для туриста</h3>
					<ul className='list-disc pl-[2rem]'>
						<li>
							<a className='underline' href='#!'>
								Виза в Узбекистан
							</a>
						</li>
						<li>
							<a className='underline' href='#!'>
								Погода и климат в Узбекистане
							</a>
						</li>
						<li>
							<a className='underline' href='#!'>
								Погода и климат в Узбекистане
							</a>
						</li>
					</ul>
					<h3 className='text-2xl pt-10 pb-3 font-medium text-center'>
						Города Узбекистана
					</h3>
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
					<h3 className='text-2xl text-center py-5'>
						Достопримечательности this is shit)
					</h3>
					<h3 className='text-2xl text-center'>Популярные статьи</h3>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
						{cards.map((el, i) => (
							<ArticleCard {...el} key={i} />
						))}
					</div>

					<div className='flex justify-center py-5'>
						<Link
							className='text-white bg-[#37AF24] px-5 py-2 rounded-xl'
							href='/tour/uzbekistan'
						>
							Туры в Узбекистан
						</Link>
					</div>
				</Container>
			</div>
		</section>
	)
}

export default Country
