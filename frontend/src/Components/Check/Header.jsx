'use client'
import { Link } from 'next/link';

const Header = () => {
	return (
		<nav className='main-header navbar navbar-expand navbar-white navbar-light'>
			{/* Left navbar links */}
			<ul className='navbar-nav'>
				<li className='nav-item'>
					<a className='nav-link' data-widget='pushmenu' href='#' role='button'>
						<i className='fas fa-bars' />
					</a>
				</li>
				<li className='nav-item d-none d-sm-inline-block'>
					<a href='/' className='nav-link'>
						Перейти на сайт
					</a>
				</li>
				<li className='nav-item d-none d-sm-inline-block'>
					<a href='/admin' className='nav-link'>
						Вернуться на главную
					</a>
				</li>
				<li className='nav-item d-none d-sm-inline-block'>
					<a href='/exit' className='nav-link'>
						Выход
					</a>
				</li>
			</ul>
		</nav>
	)
}

export default Header