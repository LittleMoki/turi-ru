'use client'
import Footer from '@/Components/Dashboard/Footer'
import Header from '@/Components/Dashboard/Header'
import Home from '@/Components/Dashboard/Home'
import SideBar from '@/Components/Dashboard/SideBar'




const Layout = ({ children }) => {
	return (
		<>
				<Header />
				<SideBar />
				<Home children={children} />
				<Footer />
		</>
	)
}

export default Layout
