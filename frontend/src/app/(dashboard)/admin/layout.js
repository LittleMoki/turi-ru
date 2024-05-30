import Footer from '@/Components/Check/Footer'
import Header from '@/Components/Check/Header'
import Home from '@/Components/Check/Home'
import SideBar from '@/Components/Check/SideBar'

const Layout = ({ children }) => {
	return (
		<div className='wrapper'>
			<Header/>
			<SideBar/>
			<Home/>
			<Footer/>
			<div className="sidebar-overlay"></div>
		</div>
	)
}

export default Layout
