import { ArticleCard, Container } from '@/Components'
import Link from 'next/link'

export const Articles = ({
	title,
	btnName,
	isBtn = false,
	btnLink = '/',
	cards,
	style,
}) => {
	return (
		<section style={style} className='pt-16'>
			<Container>
				<h1 className='text-center pb-5 text-3xl font-medium'>{title}</h1>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
					{cards?.map((el, i) => (
						<ArticleCard {...el} key={i} />
					))}
				</div>
				{isBtn && (
					<div className='flex justify-center pt-5'>
						<Link href={btnLink}>
							<button className='bg-[#37AF24] text-white p-[10px] w-[150px] rounded-2xl font-semibold text-nowrap'>
								{btnName}
							</button>
						</Link>
					</div>
				)}
			</Container>
		</section>
	)
}
