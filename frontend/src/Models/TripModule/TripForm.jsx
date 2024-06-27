'use client'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import { useState } from 'react'
import { FaEnvelope, FaGlobe, FaUser } from 'react-icons/fa'

export const TripForm = () => {
	const tripCard = [
		{ title: 'Премиум класс', id: 'accomodation-0' },
		{ title: 'Бизнес класс', id: 'accomodation-1' },
		{ title: 'Бутик отели', id: 'accomodation-2' },
		{ title: 'Бронирую сам', id: 'accomodation-3' },
	]
	const tripPeople = [
		{ title: 'Я один', id: 'solo' },
		{ title: 'Нас двое', id: 'couple' },
		{ title: 'Семья', id: 'family' },
		{ title: 'Группа', id: 'group' },
	]
	const [flexibleDates, setFlexibleDates] = useState(false)
	const [live, setLive] = useState(0)
	const [people, setPeople] = useState(0)
	const [hotel, setHotel] = useState(1)

	const setCheckLive = index => {
		setLive(index)
	}

	const setCheckPeople = index => {
		setPeople(index)
	}

	const decreaseHotel = () => {
		if (hotel > 1) {
			setHotel(hotel - 1)
		}
	}

	const increaseHotel = () => {
		setHotel(hotel + 1)
	}
	const handleChange = event => {
		setFlexibleDates(event.target.checked)
	}
	return (
		<div className='w-full flex flex-col gap-5'>
			<div className='bg-white/70 rounded-2xl p-4'>
				<h2 className='text-2xl border-l-4 border-[#66B93E] pl-2'>
					Какое ваше идеальное путешествие?
				</h2>
				<div className='pt-4'>
					<h3 className='text-xl'>Тип отеля</h3>
					<div className='grid max-[420px]:grid-cols-1 grid-cols-2 md:grid-cols-4 gap-3 pt-2'>
						{tripCard.map((el, i) => (
							<div className='flex w-full' key={i}>
								<input
									type='radio'
									id={el.id}
									value={el.title}
									className='absolute opacity-0'
									name='проживание'
								/>
								<label
									onClick={() => setCheckLive(i)}
									className={`p-3 text-center rounded-xl cursor-pointer w-full ${
										live === i ? 'bg-[#66B93E] text-white' : 'bg-white'
									}`}
									htmlFor={el.id}
								>
									{el.title}
								</label>
							</div>
						))}
					</div>
				</div>
				<div>
					<h3 className='text-xl pt-5 pb-1'>Тип отеля</h3>
					<div className='flex'>
						<button
							onClick={decreaseHotel}
							className='w-[45px] bg-[#dee2e6] text-xl'
						>
							-
						</button>
						<input
							type='number'
							value={hotel}
							min='1'
							readOnly
							className='border-0 w-[100px] text-center text-xl p-0 py-2'
						/>
						<button
							onClick={increaseHotel}
							className='w-[45px] bg-[#dee2e6] text-xl'
						>
							+
						</button>
					</div>
				</div>
				<div>
					<h3 className='text-xl pt-5 pb-1'>Дата прибытия</h3>
					<div className='flex flex-col sm:flex-row sm:items-center sm:w-auto w-full items-start gap-3'>
						<input type='date' className='sm:w-auto w-full' />
						<FormControlLabel
							control={
								<Switch
									checked={flexibleDates}
									onChange={handleChange}
									name='flexibleDates'
								/>
							}
							label='Гибкие даты?'
						/>
					</div>
				</div>
				<div>
					<h3 className='text-xl pt-5'>Направления</h3>
					<h3 className='text-xl pt-3 pb-1'>
						Чем вам могут помочь наши эксперты по путешествиям?
					</h3>
					<textarea
						className='w-full h-[150px] p-[10px] border-0 rounded-lg'
						placeholder='Укажите свои пожелания и предпочтения, чтобы мы смогли сделать Ваше путешествие особенным.'
					/>
				</div>
			</div>
			<div className='bg-white/70 rounded-2xl p-4'>
				<h3 className='text-2xl border-l-4 border-[#66B93E] pl-2'>
					Расскажите нам о себе
				</h3>
				<h3 className='text-xl pt-5'>Кто путешествует с Вами?</h3>
				<div className='grid max-[420px]:grid-cols-1 grid-cols-2 md:grid-cols-4 gap-3 pt-2'>
					{tripPeople.map((el, i) => (
						<div key={i} className='w-full flex justify-center'>
							<input
								type='radio'
								id={el.id}
								value={el.title}
								className='absolute opacity-0'
								name='проживание'
							/>
							<label
								onClick={() => setCheckPeople(i)}
								className={`w-full p-3 rounded-xl cursor-pointer text-center ${
									people === i ? 'bg-[#66B93E] text-white' : 'bg-white'
								}`}
								htmlFor={el.id}
							>
								{el.title}
							</label>
						</div>
					))}
				</div>
				<div>
					<div>
						<h3 className='text-xl pt-5 pb-2'>Ваша страна</h3>
						<div className='flex'>
							<div className='bg-[#f8f9fa] py-[6px] px-[12px] border-r-2 rounded-l-md'>
								<FaGlobe className='w-full h-full' />
							</div>
							<input
								type='text'
								className='w-full border-0 rounded-r-md'
								placeholder='Ваша страна'
							/>
						</div>
					</div>
					<div>
						<h3 className='text-xl pt-5 pb-2'>Ваше имя</h3>
						<div className='flex'>
							<div className='bg-[#f8f9fa] py-[6px] px-[12px] border-r-2 rounded-l-md'>
								<FaUser className='w-full h-full' />
							</div>
							<input
								type='text'
								className='w-full border-0 rounded-r-md'
								placeholder='Ваше имя'
							/>
						</div>
					</div>
					<div>
						<h3 className='text-xl pt-5 pb-2'>Email</h3>
						<div className='flex'>
							<div className='bg-[#f8f9fa] py-[6px] px-[12px] border-r-2 rounded-l-md'>
								<FaEnvelope className='w-full h-full' />
							</div>
							<input
								type='text'
								className='w-full border-0 rounded-r-md'
								placeholder='Ваш email'
							/>
						</div>
						<small className='opacity-70'>
							Пожалуйста, проверьте свой адрес электронной почты, чтобы мы могли
							с вами точно связаться.
						</small>
					</div>
				</div>
				<p className='text-center'>
					Нажимая на кнопку Вы даете согласие на обработку персональных данных и
					соглашаетесь с{' '}
					<a className='underline font-medium' href='#!'>
						Политикой конфиденциальности
					</a>
				</p>
			</div>
			<div className='flex justify-center pb-5'>
				<button className='bg-[#37AF24] text-xl py-2 px-5 rounded-lg text-white hover:bg-[#1f7e10] duration-100'>
					Отправить мой запрос
				</button>
			</div>
		</div>
	)
}
