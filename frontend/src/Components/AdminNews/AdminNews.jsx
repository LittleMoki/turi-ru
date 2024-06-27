'use client'
import { api } from '@/Api/api'
import CustomButton from '@/UI/CustomButton'
import CustomInput from '@/UI/CustomInput'
import { getLocalTimeZone, parseDate, today } from '@internationalized/date'
import { Card, CardBody, DatePicker, Tab, Tabs } from '@nextui-org/react'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const AdminNews = () => {
	let defaultDate = today(getLocalTimeZone())
	const router = useRouter()
	const { id, newsId } = useParams()
	// State to hold selected date
	const [country, setCountry] = useState([])
	const [formData, setFormData] = useState({
		new_date: defaultDate, // Initialize with a default date
		header: '',
		body: '',
		firsttext: '',
		lang: '',
		typeId: Number(newsId),
		view: 0,
		photo: '',
		foto: '',
		fototext: '',
		title: '',
		metakeywords: '',
		metadescription: '',
		url: '',
		publick: 0,
		country: '',
		tags: null,
	})
	const [error, setError] = useState(null)
	const [selectedDate, setSelectedDate] = useState(
		formData.new_date ? formData.new_date : defaultDate
	)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data } = await api.get('/country')
				setCountry(data.data)

				if (id) {
					const { data } = await api.get(`/news/${id}`)
					const {
						header,
						body,
						firsttext,
						lang,
						view,
						photo,
						foto,
						fototext,
						title,
						metakeywords,
						metadescription,
						url,
						publick,
						country,
						tags,
						new_date,
					} = data.data
					setFormData({
						new_date: new_date,
						header: header || '',
						body: body || '',
						firsttext: firsttext || '',
						lang: lang || '',
						typeId: Number(newsId),
						view: view || 0,
						photo: photo || '',
						foto: foto || '',
						fototext: fototext || '',
						title: title || '',
						metakeywords: metakeywords || '',
						metadescription: metadescription || '',
						url: url || '',
						publick: publick || 0,
						country: country || '',
						tags: tags || null,
					})
					setSelectedDate(new_date ? parseDate(new_date) : defaultDate)
				}
			} catch (error) {
				setError(error.message)
			}
		}

		fetchData()
	}, [id, newsId])

	const handleInputChange = e => {
		if (!e.target) return // Add a safeguard to handle unexpected event objects

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
				await api.put(`/news/${id}`, formData)
			} else {
				await api.post('/news', {
					...formData,
					new_date: `${defaultDate.year}-${
						defaultDate.month < 10 ? `0${defaultDate.month}` : defaultDate.month
					}-${defaultDate.day < 10 ? `0${defaultDate.day}` : defaultDate.day}`,
				})
			}
			router.push(`/admin/news/${newsId}`)
		} catch (error) {
			setError(error.message)
		}
	}
	const handleDateChange = newDate => {
		setSelectedDate(newDate)
		setFormData(prevState => ({
			...prevState,
			new_date: `${newDate.year}-${
				newDate.month < 10 ? `0${newDate.month}` : newDate.month
			}-${newDate.day < 10 ? `0${newDate.day}` : newDate.day}`,
		}))

		// Optionally, you can update formData.new_date here as well
	}
	if (error) {
		return (
			<div className='pt-3'>
				<p>{error}</p>
			</div>
		)
	}

	return (
		<div className='flex w-full dark flex-col'>
			<Tabs aria-label='Options'>
				<Tab key='settings' title='Общие настройки'>
					<Card>
						<CardBody>
							<form
								className='flex flex-col gap-3 items-start'
								onSubmit={handleSubmit}
							>
								<DatePicker
									className='max-w-[284px]'
									label='Дата статьи:'
									value={selectedDate}
									onChange={handleDateChange}
									description='Нажми на иконку чтобы открыть календарь'
								/>
								<CustomInput
									name='header'
									value={formData.header || ''}
									fn={handleInputChange}
									label='Заголовок :'
									white='true'
								/>
								<CustomInput
									name='title'
									value={formData.title || ''}
									fn={handleInputChange}
									label='Описание в заголовке (title) :'
									white='true'
								/>
								<CustomInput
									name='metakeywords'
									value={formData.metakeywords || ''}
									fn={handleInputChange}
									label='Описание в заголовке (metakeywords) :'
									white='true'
								/>
								<CustomInput
									name='metadescription'
									value={formData.metadescription || ''}
									fn={handleInputChange}
									label='Описание в заголовке (metadescription):'
									white='true'
								/>
								<CustomInput
									name='url'
									value={formData.url || ''}
									fn={handleInputChange}
									label='Адрес статьи (URL) :'
									white='true'
									smallText='Не пишите одинаковые ссылки'
								/>
								<label className='flex w-full flex-col'>
									Страна:
									<select
										name='country'
										className='py-3 px-4 rounded-lg'
										value={formData.country || ''}
										onChange={handleInputChange}
									>
										{country.map(el => (
											<option key={el.id} value={el.name || ''}>
												{el.name}
											</option>
										))}
									</select>
								</label>
								<CustomInput
									name='tags'
									value={formData.tags || ''}
									fn={handleInputChange}
									label='Метки:'
									white='true'
								/>
								<label className='flex gap-2'>
									<input
										type='checkbox'
										name='publick'
										checked={formData.publick === 1}
										onChange={handleInputChange}
									/>
									Опубликовать на сайте?
								</label>
								<CustomButton type='submit'>Save</CustomButton>
							</form>
						</CardBody>
					</Card>
				</Tab>
				<Tab key='description' title='Описание'>
					<Card>
						<CardBody>
							<form
								className='flex flex-col gap-3 items-start'
								onSubmit={handleSubmit}
							>
								<CustomInput
									name='firsttext'
									value={formData.firsttext || ''}
									fn={handleInputChange}
									label='Краткий анонс:'
									white='true'
								/>
								<CustomInput
									name='body'
									value={formData.body || ''}
									fn={handleInputChange}
									label='Полный текст:'
									white='true'
								/>
								<CustomButton type='submit'>Save</CustomButton>
							</form>
						</CardBody>
					</Card>
				</Tab>
				<Tab key='photos' title='Изображение'>
					<Card>
						<CardBody>
							<form onSubmit={handleSubmit}>
								<CustomButton type='submit'>Save</CustomButton>
							</form>
						</CardBody>
					</Card>
				</Tab>
			</Tabs>
		</div>
	)
}

export default AdminNews
