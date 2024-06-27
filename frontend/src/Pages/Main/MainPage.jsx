import { Advantages } from '../../Models/MainModules/Advantages'
import { Articles } from '../../Models/MainModules/Articles'
import { HeroBlock } from '../../Models/MainModules/HeroBlock'
import { PopularDestinations } from '../../Models/MainModules/PopularDestinations'
import { RecomendedTours } from '../../Models/MainModules/RecomendedTours'
import { Reviews } from '../../Models/MainModules/Reviews'

const MainPage = () => {
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
	return (
		<>
			<HeroBlock />
			<Advantages />
			<RecomendedTours />
			<PopularDestinations />
			<Reviews />
			<Articles
				title={'Новости Узбекистана'}
				btnName={'Все новости'}
				cards={cards}
			/>
			<Articles
				title={'Популярные статьи'}
				btnName={'Все статьи'}
				cards={cards}
				style={{ paddingBottom: '30px' }}
			/>
		</>
	)
}

export default MainPage
