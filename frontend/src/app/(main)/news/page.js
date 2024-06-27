import { Articles } from '@/Models/MainModules'

const NewsPage = () => {
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
		<Articles
			title={'Новости Узбекистана'}
			btnName={'Все новости'}
			cards={cards}
		/>
	)
}

export default NewsPage
