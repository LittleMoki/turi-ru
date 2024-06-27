'use client'
import { api } from '@/Api/api'
import CustomInput from '@/UI/CustomInput'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import CustomButton from '../../UI/CustomButton'
import CustomEditor from '@/UI/CustomEditor'

const AdminCountry = () => {
	const router = useRouter()
	const { id, slug } = useParams()
	const [formData, setFormData] = useState({
		language_id: 0,
		name: '',
		url: '',
		description: '',
		title: '',
		metadescription: '',
		metakeywords: '',
		photo: '',
	})
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			if (!id) return
			try {
				const { data } = await api.get(`/country/${id}`)
				const {
					language_id,
					name,
					url,
					description,
					title,
					metadescription,
					metakeywords,
					photo,
				} = data.data
				setFormData({
					language_id: language_id || 0,
					name: name || '',
					url: url || '',
					description: description || '',
					title: title || '',
					metadescription: metadescription || '',
					metakeywords: metakeywords || '',
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
				await api.put(`/country/${id}`, formData)
			} else {
				await api.post(`/country`, formData)
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
		<form className='flex flex-col gap-3 items-start' onSubmit={handleSubmit}>
			<CustomInput
				name='name'
				fn={handleInputChange}
				value={formData.name}
				label='Название страны:'
			/>
			<CustomInput
				name='url'
				fn={handleInputChange}
				value={formData.url}
				label='Ссылка на страну:'
			/>
			<CustomInput
				name='description'
				fn={handleInputChange}
				value={formData.description}
				label='Описание страны:'
			/>
			<CustomInput
				name='title'
				fn={handleInputChange}
				value={formData.title}
				label='Title:'
			/>
			<CustomInput
				name='metakeywords'
				fn={handleInputChange}
				value={formData.metakeywords}
				label='Metakeywords:'
			/>
			<CustomInput
				name='metadescription'
				fn={handleInputChange}
				value={formData.metadescription}
				label='Metadescription:'
			/>
			<CustomButton type='submit'>Save</CustomButton>
		</form>
	)
}

export default AdminCountry
