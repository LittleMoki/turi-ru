'use client'
import { api } from '@/Api/api'
import CustomInputAdmin from '@/UI/CustomInputAdmin'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const AdminNewsType = () => {
	const router = useRouter()
	const { id, slug } = useParams()
	const [formData, setFormData] = useState({
		name: '',
		description: '',
		photo: '',
		url: '',
		title: '',
		metakeywords: '',
		metadescription: '',
	})
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			if (!id) return
			try {
				const { data } = await api.get(`/news_type/${id}`)
				const {
					name,
					description,
					photo,
					url,
					title,
					metakeywords,
					metadescription,
				} = data.data
				setFormData({
					name: name || '',
					description: description || '',
					photo: photo || '',
					url: url || '',
					title: title || '',
					metakeywords: metakeywords || '',
					metadescription: metadescription || '',
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
				await api.put(`/news_type/${id}`, formData)
			} else {
				await api.post(`/news_type`, formData)
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
				Название
			</CustomInputAdmin>
			<CustomInputAdmin name='url' fn={handleInputChange} value={formData.url}>
				Ссылка на тип
			</CustomInputAdmin>
			<CustomInputAdmin
				name='description'
				fn={handleInputChange}
				value={formData.description}
			>
				Описание
			</CustomInputAdmin>
			<CustomInputAdmin
				name='title'
				fn={handleInputChange}
				value={formData.title}
			>
				Title
			</CustomInputAdmin>
			<CustomInputAdmin
				name='metakeywords'
				fn={handleInputChange}
				value={formData.metakeywords}
			>
				Metakeywords
			</CustomInputAdmin>
			<CustomInputAdmin
				name='metadescription'
				fn={handleInputChange}
				value={formData.metadescription}
			>
				Metadescription
			</CustomInputAdmin>
			<CustomInputAdmin
				name='photo'
				fn={handleInputChange}
				value={formData.photo}
			>
				Фото типа
			</CustomInputAdmin>
			<input
				className='bg-black py-2 px-5 rounded-md'
				type='submit'
				value='Save'
			/>
		</form>
	)
}

export default AdminNewsType
