'use client'
import { api } from '@/Api/api'
import CustomInputAdmin from '@/UI/CustomInputAdmin'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const AdminFaq = () => {
	const router = useRouter()
	const { id, slug } = useParams()
	const [formData, setFormData] = useState({
		name: '',
		description: '',
		archive: 0,
	})
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			if (!id) return
			try {
				const { data } = await api.get(`/faq/${id}`)
				const { name, description, archive } = data.data
				setFormData({
					name: name || '',
					description: description || '',
					archive: archive || 0,
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
				await api.put(`/faq/${id}`, formData)
			} else {
				await api.post(`/faq`, formData)
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
				fn={handleInputChange}
				value={formData.name}
			>
				Вопрос
			</CustomInputAdmin>
			<CustomInputAdmin
				name='description'
				fn={handleInputChange}
				value={formData.description}
			>
				Описание
			</CustomInputAdmin>
			<label className='flex gap-2'>
				<input
					name='archive'
					checked={formData.archive === 1}
					onChange={handleInputChange}
					type='checkbox'
				/>
				Перенести тур в архив
			</label>
			<input
				className='bg-black py-2 px-5 rounded-md'
				type='submit'
				value='Save'
			/>
		</form>
	)
}

export default AdminFaq
