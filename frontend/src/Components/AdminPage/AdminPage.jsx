'use client'
import { api } from '@/Api/api'
import CustomInput from '@/UI/CustomInput'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import CustomButton from '../../UI/CustomButton'
import {Checkbox} from "@nextui-org/react";
import CustomEditor from "@/UI/CustomEditor.jsx";

const AdminPage = () => {
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
				const { data } = await api.get(`/page/${id}`)
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

	const handleEditorChange = (name, value) => {
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = async e => {
		e.preventDefault()
		try {
			if (id) {
				await api.put(`/page/${id}`, formData)
			} else {
				await api.post(`/page`, formData)
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
		<section className='py-3 flex flex-col items-start text-black'>
			<form
				className='flex flex-col gap-3 w-full items-start'
				onSubmit={handleSubmit}
			>
				<CustomInput
					name='titlename'
					fn={handleInputChange}
					value={formData.titlename}
					label='Название страницы:'
				/>
				<CustomInput
					name='url'
					value={formData.url}
					fn={handleInputChange}
					label='Url страницы:'
				/>
				<CustomInput
					name='title'
					value={formData.title}
					fn={handleInputChange}
					label='Title:'
				/>
				<CustomInput
					name='metakeywords'
					value={formData.metakeywords}
					fn={handleInputChange}
					label='Metakeywords:'
				/>
				<CustomInput
					name='metadescription'
					value={formData.metadescription}
					fn={handleInputChange}
					label='Metadescription:'
				/>
				<label className='w-full text-white'>
					Содержание страницы:
					<CustomEditor
						id='description'
						fn={handleEditorChange}
						name='description'
						value={formData.description}
					/>
				</label>
				<Checkbox className='dark' name='isdel' onChange={handleInputChange} isSelected={formData.isdel === 1}>
					Удаляемая страница
				</Checkbox>
				<CustomButton type='submit'>Save</CustomButton>
			</form>
		</section>
	)
}

export default AdminPage
