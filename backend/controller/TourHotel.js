import prisma from '../db/db.config.js'

export const CreateHotel = async (req, res) => {
	const {
		country_id,
		cityid,
		name,
		url,
		title,
		metakeywords,
		metadescription,
		rating,
		address,
		photo,
		body,
		map,
		services,
		service_text,
		conditions,
		publics,
	} = req.body

	const hotel = await prisma.t_hotel.create({
		data: {
			country_id,
			cityid,
			name,
			url,
			title,
			metakeywords,
			metadescription,
			rating,
			address,
			photo,
			body,
			map,
			services,
			service_text,
			conditions,
			publics,
		},
	})

	return res.json({ status: 200, data: hotel })
}

export const ShowAllHotels = async (req, res) => {
	const hotels = await prisma.t_hotel.findMany({
		include:{
			country:{
				select:{
					name:true
				}
			}
		}
	})

	if (!hotels)
		return res.json({ status: 400, message: 'We did not find any hotels' })

	return res.json({ status: 200, data: hotels })
}

export const ShowHotel = async (req, res) => {
	const { id } = req.params

	const findHotel = await prisma.t_hotel.findUnique({
		where: {
			id: Number(id),
		},
	})

	if (!findHotel)
		return res.json({ status: 400, message: 'We did not find this hotel' })

	return res.json({ status: 200, data: findHotel })
}

export const EditHotel = async (req, res) => {
	const { id } = req.params
	const {
		country_id,
		cityid,
		name,
		url,
		title,
		metakeywords,
		metadescription,
		rating,
		address,
		photo,
		body,
		map,
		services,
		service_text,
		conditions,
		publics,
	} = req.body

	const findHotel = await prisma.t_hotel.findUnique({
		where: {
			id: Number(id),
		},
	})

	if (!findHotel)
		return res.json({ status: 400, message: 'We did not find this hotel' })

	const editHotel = await prisma.t_hotel.update({
		where: {
			id: Number(id),
		},
		data: {
			country_id,
			cityid,
			name,
			url,
			title,
			metakeywords,
			metadescription,
			rating,
			address,
			photo,
			body,
			map,
			services,
			service_text,
			conditions,
			publics,
		},
	})

	return res.json({
		status: 200,
		message: 'Hotel is edited successfully',
		data: editHotel,
	})
}

export const DeleteHotel = async (req, res) => {
	const { id } = req.params

	const deleteHotel = await prisma.t_hotel.delete({
		where: {
			id: Number(id),
		},
	})

	return res.json({ status: 200, message: 'We deleted hotel successfully' })
}
