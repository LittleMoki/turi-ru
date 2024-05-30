'use client'

 const Home = () => {
	return (
		<div className='content-wrapper p-3' style={{ minHeight: 818 }}>
			<section className='content p-3'>
				<h1 className='h3 mb-3'>Панель управления</h1>
				<div className='row'>
					<div className='col-3'>
						<div className='small-box bg-gradient-yellow'>
							<div className='inner'>
								<h3>60</h3>
								<p>Всего активных туров</p>
							</div>
							<div className='icon'>
								<i className='fas fa-route' />
							</div>
							<a href='/admin/tour.php?act=list' className='small-box-footer'>
								Подробнее <i className='fas fa-arrow-circle-right' />
							</a>
						</div>
					</div>
					<div className='col-3'>
						<div className='small-box bg-gradient-teal'>
							<div className='inner'>
								<h3>923</h3>
								<p>Всего статей</p>
							</div>
							<div className='icon'>
								<i className='fas fa-newspaper' />
							</div>
							<a
								href='/admin/news.php?act=list&type=9'
								className='small-box-footer'
							>
								Подробнее <i className='fas fa-arrow-circle-right' />
							</a>
						</div>
					</div>
					<div className='col-3'>
						<div className='small-box bg-gradient-indigo'>
							<div className='inner'>
								<h3>7</h3>
								<p>Всего стран</p>
							</div>
							<div className='icon'>
								<i className='fas fa-map-marked-alt' />
							</div>
							<a
								href='/admin/country.php?act=list'
								className='small-box-footer'
							>
								Подробнее <i className='fas fa-arrow-circle-right' />
							</a>
						</div>
					</div>
					<div className='col-3'>
						<div className='small-box bg-gradient-info'>
							<div className='inner'>
								<h3>97</h3>
								<p>Всего городов</p>
							</div>
							<div className='icon'>
								<i className='fas fa-map' />
							</div>
							<a href='/admin/city.php?act=list' className='small-box-footer'>
								Подробнее <i className='fas fa-arrow-circle-right' />
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Home