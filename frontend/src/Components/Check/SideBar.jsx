'use client'

import Image from 'next/image'
import logoAdmin from '../../../public/logo-admin.svg'
import Link from 'next/link'

const SideBar = () => {
	const sideBarItems = [
		{
			icon: 'nav-icon far fa-file',
			title: 'Cтраницы',
			link: '/admin/page',
		},
		{
			icon: 'nav-icon fas fa-suitcase',
			title: 'Туры',
			link: '/admin/tour',
		},
		{
			icon: 'nav-icon fas fa-map-signs',
			title: 'Типы туров',
			link: '/admin/tour_type',
		},
		{
			icon: 'nav-icon fas fa-concierge-bell',
			title: 'Услуги',
			link: '/admin/services',
		},
		{
			icon: 'nav-icon fas fa-atlas',
			title: 'Страны',
			link: '/admin/country',
		},
		{
			icon: 'nav-icon fas fa-atlas',
			title: 'Города',
			link: '/admin/city',
		},
		{
			icon: 'nav-icon fas fa-landmark',
			title: 'Места',
			link: '/admin/place',
		},
		{
			icon: 'nav-icon fas fa-hotel',
			title: 'Гостиницы',
			link: '/admin/hotel',
		},
		{
			icon: 'nav-icon far fa-sticky-note',
			title: 'Типы статей',
			link: '/admin/news_type',
		},
		{
			icon: 'nav-icon far fa-sticky-note',
			title: 'Статьи',
			link: '/admin/news',
		},
		{
			icon: 'nav-icon far fa-question-circle',
			title: 'FAQ',
			link: '/admin/faq',
		},

		{
			icon: 'nav-icon fas fa-user',
			title: 'Пользователи',
			link: '/admin/users',
		},
		{
			icon: 'nav-icon fas fa-user-friends',
			title: 'Партнеры',
			link: '/admin/team',
		},
		{
			icon: 'nav-icon fas fa-box-open',
			title: 'Заказы',
			link: '/admin/orders',
		},
		{
			icon: 'nav-icon fas fa-user-tie',
			title: 'Сотрудники',
			link: '/admin/about',
		},
		{
			icon: 'nav-icon fas fa-coins',
			title: 'Валюта',
			link: '/admin/exchange',
		},
	]
	return (
		<aside className='main-sidebar sidebar-dark-primary elevation-4'>
			<a className='brand-link' href='/admin'>
				<Image
					style={{opacity:'.8'}}
					src={logoAdmin}
					alt='Logo'
					className='brand-image'
				/>
				<span className='brand-text font-weight-light'>Minzifa Travel ®</span>
			</a>
			<div className='sidebar os-host os-theme-light os-host-resize-disabled os-host-transition os-host-scrollbar-vertical-hidden os-host-overflow os-host-overflow-x'>
				<div className='os-resize-observer-host observed'>
					<div
						className='os-resize-observer'
						style={{ left: 0, right: 'auto' }}
					/>
				</div>
				<div
					className='os-size-auto-observer observed'
					style={{ height: 'calc(100% + 1px)', float: 'left' }}
				>
					<div className='os-resize-observer' />
				</div>
				<div
					className='os-content-glue'
					style={{ margin: '0px -8px', width: 73, height: 874 }}
				/>
				<div className='os-padding'>
					<div
						className='os-viewport os-viewport-native-scrollbars-invisible'
						style={{ overflowX: 'scroll' }}
					>
						<div
							className='os-content'
							style={{ padding: '0px 8px', height: '100%', width: '100%' }}
						>
							<nav className='mt-2'>
								<ul
									id='navbarMenu'
									className='nav nav-pills nav-sidebar flex-column'
									data-widget='treeview'
									role='menu'
									data-accordion='false'
								>
									{sideBarItems.map((el, i) => (
										<li key={i} className='nav-item'>
											<Link className='nav-link' href={el.link}>
												<i className={el.icon} />
												<p>{el.title}</p>
											</Link>
										</li>
									))}
								</ul>
							</nav>
						</div>
					</div>
				</div>
				<div className='os-scrollbar os-scrollbar-horizontal os-scrollbar-auto-hidden'>
					<div className='os-scrollbar-track'>
						<div
							className='os-scrollbar-handle'
							// style={{ width: '50.6849%', transform: 'translate(0px, 0px)' }}
						/>
					</div>
				</div>
				<div className='os-scrollbar os-scrollbar-vertical os-scrollbar-unusable os-scrollbar-auto-hidden'>
					<div className='os-scrollbar-track'>
						<div
							className='os-scrollbar-handle'
							// style={{ height: '100%', transform: 'translate(0px, 0px)' }}
						/>
					</div>
				</div>
				<div className='os-scrollbar-corner' />
			</div>
		</aside>
	)
}

export default SideBar
