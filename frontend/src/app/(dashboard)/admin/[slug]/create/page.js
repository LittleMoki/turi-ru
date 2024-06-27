'use client'

import AdminCity from '@/Components/AdminCity/AdminCity'
import AdminCountry from '@/Components/AdminCountry/AdminCountry'
import AdminExchange from '@/Components/AdminExchange/AdminExchange'
import AdminFaq from '@/Components/AdminFaq/AdminFaq'
import AdminNewsType from '@/Components/AdminNewsType/AdminNewsType'
import AdminPage from '@/Components/AdminPage/AdminPage'
import AdminPlace from '@/Components/AdminPlace/AdminPlace'
import AdminServices from '@/Components/AdminServices/AdminServices'
import AdminTeam from '@/Components/AdminTeam/AdminTeam'
import AdminUsers from '@/Components/AdminUsers/AdminUsers'
import { useParams } from 'next/navigation'

const Create = () => {
	const params = useParams()

	switch (params.slug) {
		case 'page':
			return <AdminPage />
		case 'services':
			return <AdminServices />
		case 'country':
			return <AdminCountry />
		case 'city':
			return <AdminCity />
		case 'place':
			return <AdminPlace />
		case 'faq':
			return <AdminFaq />
		case 'team':
			return <AdminTeam />
		case 'news_type':
			return <AdminNewsType />
		case 'users':
			return <AdminUsers />
		case 'exchange':
			return <AdminExchange />
		default:
			return <h1>Not page</h1>
	}
}

export default Create
