'use client'
import { api } from '@/Api/api'
import CustomInputAdmin from '@/UI/CustomInputAdmin'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const AdminTeam = () => {
	const router = useRouter()
	const { id, slug } = useParams()
	const [formData, setFormData] = useState({
		name: '',
		photo: '',
	})
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			if (!id) return
			try {
				const { data } = await api.get(`/team/${id}`)
				const { name, photo } = data.data
				setFormData({
					name: name || '',
					photo: photo || '',
				})
			} catch (error) {
				setError(error.message)
			}
		}

		fetchData()
	}, [id])

	const handleInputChange = e => {
		const { name, value } = e.target
		setFormData(prevState => ({
			...prevState,
			[name]: value,
		}))
	}

	const handleSubmit = async e => {
		e.preventDefault()
		try {
			if (id) {
				await api.put(`/team/${id}`, formData)
			} else {
				await api.post(`/team`, formData)
			}
			router.push(`/admin/${slug}`)
		} catch (error) {
			setError(error.message)
		}
	}

	if (error) {
		return (
			<div className='pt-3'>
				<p>{error}</p>
			</div>
		)
	}
	return (
		<form onSubmit={handleSubmit}>
			<CustomInputAdmin
				name='name'
				value={formData.name}
				fn={handleInputChange}
			>
				Название
			</CustomInputAdmin>
			<input
				className='bg-black py-2 px-5 rounded-md'
				type='submit'
				value='Save'
			/>
		</form>
	)
}

export default AdminTeam
