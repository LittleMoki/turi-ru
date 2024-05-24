'use client'
import { api } from '@/api/api'
import { useEffect } from 'react'

const fetchTours = async () => {
	const response = await api.get('/tour_type')
	console.log(response.data)
}

const Admin = () => {
	useEffect(()=>{
		fetchTours()
	},[])
	return <section>Admin</section>
}

export default Admin
