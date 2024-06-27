'use client'
import { api } from '@/Api/api'
import CustomInputAdmin from '@/UI/CustomInputAdmin'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const AdminExchange = () => {
	const router = useRouter()
	const { id, slug } = useParams()
	const [formData, setFormData] = useState({
		title: '',
		name: '',
		symbol: '',
		exchange_rate: 0,
		primary_valuta: false,
	})
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			if (!id) return
			try {
				const { data } = await api.get(`/exchange/${id}`)
				const { title, name, symbol, exchange_rate, primary_valuta } = data.data
				setFormData({
					title: title || '',
					name: name || '',
					symbol: symbol || '',
					exchange_rate: exchange_rate || 0,
					primary_valuta: primary_valuta || false,
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
			[name]:
				type === 'checkbox'
					? checked
						? true
						: false
					: name == 'exchange_rate'
					? Number(value)
					: value,
		}))
	}

	const handleSubmit = async e => {
		e.preventDefault()
		try {
			if (id) {
				await api.put(`/exchange/${id}`, formData)
			} else {
				await api.post(`/exchange`, formData)
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
				name='title'
				fn={handleInputChange}
				value={formData.title}
			>
				Название валюты:
			</CustomInputAdmin>
			<CustomInputAdmin
				name='name'
				fn={handleInputChange}
				value={formData.name}
			>
				Код валюты:
			</CustomInputAdmin>
			<CustomInputAdmin
				name='symbol'
				fn={handleInputChange}
				value={formData.symbol}
			>
				Символ*:
			</CustomInputAdmin>
			<CustomInputAdmin
				name='exchange_rate'
				fn={handleInputChange}
				value={formData.exchange_rate}
			>
				Курс валюты*:
			</CustomInputAdmin>
			<label className='flex gap-2'>
				<input
					name='primary_valuta'
					checked={formData.primary_valuta === true}
					onChange={handleInputChange}
					type='checkbox'
				/>
				Сделать эту валюту главной?
			</label>
			<input
				className='bg-black py-2 px-5 rounded-md'
				type='submit'
				value='Save'
			/>
		</form>
	)
}

export default AdminExchange
