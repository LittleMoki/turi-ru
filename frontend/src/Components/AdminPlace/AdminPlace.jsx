// AdminPlace.jsx

'use client'
import { api } from '@/Api/api'
import CustomInput from '@/UI/CustomInput'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const AdminPlace = () => {
	const router = useRouter()
	const { id, slug } = useParams()
	const [city, setCity] = useState([])
	const [formData, setFormData] = useState({
		country_id: 0,
		cityid: 0,
		url: '',
		name: '',
		body: '',
		photo: '',
		foto: '',
		fotoext: '',
		metakeywords: '',
		metadescription: '',
		publics: 0,
	})
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const cityResponse = await api.get('city')
				setCity(cityResponse.data.data)

				if (id) {
					const { data } = await api.get(`/place/${id}`)
					const {
						country_id,
						cityid,
						url,
						name,
						body,
						photo,
						foto,
						fotoext,
						metakeywords,
						metadescription,
						publics,
					} = data.data
					setFormData({
						country_id: country_id || 0,
						cityid: cityid || 0,
						url: url || '',
						name: name || '',
						body: body || '',
						photo: photo || '',
						foto: foto || '',
						fotoext: fotoext || '',
						metakeywords: metakeywords || '',
						metadescription: metadescription || '',
						publics: publics || 0,
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
			[name]: name === 'cityid' ? Number(value) : value,
		}))
	}

	const handleSubmit = async e => {
		e.preventDefault()
		try {
			if (id) {
				await api.put(`/place/${id}`, formData)
			} else {
				await api.post(`/place`, formData)
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
				label='Название достопримечательности:'
			/>
			<label className='flex flex-col w-full text-white'>
				Город:
				<select
					onChange={handleInputChange}
					value={formData.cityid}
					className='py-3 px-4 rounded-sm bg-white'
					name='cityid'
				>
					{city.map(el => (
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
				label='Ссылка на достопримечательность:'
			/>
			<CustomInput
				name='body'
				fn={handleInputChange}
				value={formData.body}
				label='Описание страны:'
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
				name='foto'
				fn={handleInputChange}
				value={formData.foto}
				label='Фото достопримечательности:'
			/>
			<input
				className='bg-black py-2 px-5 rounded-md'
				type='submit'
				value='Save'
			/>
		</form>
	)
}

export default AdminPlace
