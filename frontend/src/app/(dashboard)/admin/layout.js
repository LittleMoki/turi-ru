import Sidebar from '@/Components/Sidebar/Sidebar'

const Layout = ({ children }) => {
	return (
		<main className='text-white relative min-h-full'>
			<Sidebar>
				{children}
			</Sidebar>
			<footer>Footer</footer>
		</main>
	)
}

export default Layout
