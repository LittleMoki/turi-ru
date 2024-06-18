import prisma from '../db/db.config.js'

export const CreateCity = async (req, res) => {
	const {
		country_id,
		country,
		name,
		url,
		body,
		map,
		photo,
		metakeywords,
		metadescription,
		title,
	} = req.body

	const city = await prisma.t_city.create({
		data: {
			country_id,
			name,
			url,
			body,
			map,
			photo,
			metakeywords,
			metadescription,
			title,
		},
	})
	return res.json({
		status: 200,
		message: 'City created successfully',
		data: city,
	})
}

export const ShowAllCities = async (req, res) => {
	const cities = await prisma.t_city.findMany({
		include: {
			country: true,
		},
	})

	if (!cities)
		return res.json({ status: 400, message: 'We did not find any cities' })

	return res.json({ status: 200, data: cities })
}

export const ShowCity = async (req, res) => {
	const { id } = req.params

	const findCity = await prisma.t_city.findUnique({
		where: {
			id: Number(id),
		},
	})

	if (!findCity)
		return res.json({ status: 400, message: 'We did not find this city' })

	return res.json({ status: 200, data: findCity })
}

export const EditCity = async (req, res) => {
	const { id } = req.params
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
	} = req.body

	const findCity = await prisma.t_city.findUnique({
		where: {
			id: Number(id),
		},
	})

	if (!findCity)
		return res.json({ status: 400, message: 'We did not find this city' })

	const editCity = await prisma.t_city.update({
		where: {
			id: Number(id),
		},
		data: {
			country_id,

			name,
			url,
			body,
			map,
			photo,
			metakeywords,
			metadescription,
			title,
		},
	})

	return res.json({
		status: 200,
		message: 'City is edited successfully',
		data: editCity,
	})
}

export const DeleteCity = async (req, res) => {
	const { id } = req.params

	const deleteCity = await prisma.t_city.delete({
		where: {
			id: Number(id),
		},
	})

	return res.json({
		status: 200,
		message: 'We deleted city successfully',
		data: deleteCity,
	})
}