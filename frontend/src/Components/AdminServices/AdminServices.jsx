'use client'
import { api } from '@/Api/api'
import CustomInput from '@/UI/CustomInput'
import CustomSelect from '@/UI/CustomSelect'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import CustomButton from '../../UI/CustomButton'

const AdminServices = () => {
	const router = useRouter()
	const { id, slug } = useParams()
	const [formData, setFormData] = useState({
		type_id: 1,
		title: '',
		icon: '',
		price: 0,
		archive: 0,
	})
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			if (!id) return
			try {
				const { data } = await api.get(`/services/${id}`)
				const { type_id, title, icon, price, archive } = data.data
				setFormData({
					type_id: type_id || 1,
					title: title || '',
					icon: icon || '',
					price: price || 0,
					archive: archive || 0,
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
			[name]: name === 'type_id' ? Number(value) : value,
		}))
	}

	const handleSelectChange = selectedKeys => {
		const selectedValue = Array.from(selectedKeys)[0]
		setFormData(prevState => ({
			...prevState,
			type_id: Number(selectedValue),
		}))
	}

	const handleSubmit = async e => {
		e.preventDefault()
		try {
			if (id) {
				await api.put(`/services/${id}`, formData)
			} else {
				await api.post(`/services`, formData)
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

	const selectOptions = [
		{ value: 1, label: 'Включено / Не Включено' },
		{ value: 2, label: 'Заметки' },
		{ value: 3, label: 'Платные услуги' },
	]

	return (
		<form className='flex flex-col gap-3 items-start' onSubmit={handleSubmit}>
			<CustomInput
				name='title'
				fn={handleInputChange}
				value={formData.title}
				label='Название услуги:'
			/>
			<CustomInput
				name='icon'
				fn={handleInputChange}
				value={formData.icon}
				label='Иконка:'
				smallText='Укажите класс иконки услуги. Она будет выводиться на сайте внутри тура. Пример: "fa fa-ticket-alt".'
				smallTextLink='https://fontawesome.com/'
				linkText='Иконки берите тут.'
			/>
			<CustomSelect
				name='type_id'
				fn={handleSelectChange}
				value={new Set([formData.type_id.toString()])}
				data={selectOptions}
				label='Тип услуги:'
				description='Выберите тип услуги. Она будет отображаться в разделе изменения туров, во вкладке услуги (Включено / Не включено / Заметка).'
			/>
			<CustomButton type='submit'>Save</CustomButton>
		</form>
	)
}

export default AdminServices
