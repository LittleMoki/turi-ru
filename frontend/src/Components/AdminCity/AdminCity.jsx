// AdminCity.jsx

import { api } from '@/Api/api'
import CustomButton from '@/UI/CustomButton'
import CustomInput from '@/UI/CustomInput'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const AdminCity = () => {
	const router = useRouter()
	const { id, slug } = useParams()
	const [country, setCountry] = useState([])
	const [formData, setFormData] = useState({
		country_id: 0,
		name: '',
		url: '',
		body: '',
		map: '',
		photo: '',
		metakeywords: '',
		metadescription: '',
		title: '',
	})
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const countryResponse = await api.get('country')
				setCountry(countryResponse.data.data)

				if (id) {
					const { data } = await api.get(`/city/${id}`)
					const {
						country_id,
						name,
						url,
						body,
						map,
						photo,
						metakeywords,
						metadescription,
						title,
					} = data.data
					setFormData({
						country_id: country_id || 0,
						name: name || '',
						url: url || '',
						body: body || '',
						map: map || '',
						photo: photo || '',
						metakeywords: metakeywords || '',
						metadescription: metadescription || '',
						title: title || '',
					})
				}
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
			[name]: name === 'country_id' ? Number(value) : value,
		}))
	}

	const handleSubmit = async e => {
		e.preventDefault()
		try {
			if (id) {
				await api.put(`/city/${id}`, formData)
			} else {
				await api.post(`/city`, formData)
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
				label='Название города:'
			/>
			<label className='flex flex-col w-full text-white'>
				Страна:
				<select
					onChange={handleInputChange}
					value={formData.country_id}
					className='py-3 rounded-lg px-4 bg-white'
					name='country_id'
				>
					{country.map(el => (
						<option key={el.id} value={el.id}>
							{el.name}
						</option>
					))}
				</select>
			</label>
			<CustomInput
				name='url'
				fn={handleInputChange}
				value={formData.url}
				label='Ссылка на город:'
			/>
			<CustomInput
				name='body'
				fn={handleInputChange}
				value={formData.body}
				label='Описание города:'
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
			<CustomInput
				name='map'
				fn={handleInputChange}
				value={formData.map}
				label='Карта:'
			/>
			<CustomInput
				name='photo'
				fn={handleInputChange}
				value={formData.photo}
				label='Фото города:'
			/>
			<CustomButton type='submit'>Save</CustomButton>
		</form>
	)
}

export default AdminCity
