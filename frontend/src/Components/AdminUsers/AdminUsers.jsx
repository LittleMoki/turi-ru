'use client'
import { api } from '@/Api/api'
import CustomInputAdmin from '@/UI/CustomInputAdmin'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const AdminUsers = () => {
	const router = useRouter()
	const { id, slug } = useParams()
	const [formData, setFormData] = useState({
		url: '',
		metakeywords: '',
		metadescription: '',
		title: '',
		titlename: '',
		description: '',
		isdel: 0,
	})
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			if (!id) return
			try {
				const { data } = await api.get(`/users/${id}`)
				const {
					url,
					metakeywords,
					metadescription,
					title,
					titlename,
					description,
					isdel,
				} = data.data
				setFormData({
					url: url || '',
					metakeywords: metakeywords || '',
					metadescription: metadescription || '',
					title: title || '',
					titlename: titlename || '',
					description: description || '',
					isdel: isdel || 0,
				})
			} catch (error) {
				setError(error.message)
			}
		}

		fetchData()
	}, [id])

	const handleInputChange = e => {
		const { name, value, type, checked } = e.target
		setFormData(prevState => ({
			...prevState,
			[name]: type === 'checkbox' ? (checked ? 1 : 0) : value,
		}))
	}

	const handleSubmit = async e => {
		e.preventDefault()
		try {
			if (id) {
				await api.put(`/users/${id}`, formData)
			} else {
				await api.post(`/users`, formData)
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
		<form>
			<CustomInputAdmin>Check</CustomInputAdmin>
		</form>
	)
}

export default AdminUsers
