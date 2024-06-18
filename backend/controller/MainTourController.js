import prisma from '../db/db.config.js'

export const CreateTour = async (req, res) => {
	const {
		type,
		main_title,
		name,
		name2,
		price,
		oldPrice,
		sales,
		body,
		map,
		url,
		photo,
		date,
		metakeywords,
		metadescription,
		ftext,
		ftext2,
		intop,
		intop2,
		intop3,
		types,
		include,
		exclude,
		notes,
		paid_services,
		places,
		transport,
		travellers,
		archive,
		solo_price,
		single_price,
		guaranted,
		new_type,
	} = req.body

	const tour = await prisma.t_tour.create({
		data: {
			type,
			main_title,
			name,
			name2,
			price,
			oldPrice,
			sales,
			body,
			map,
			url,
			photo,
			date,
			metakeywords,
			metadescription,
			ftext,
			ftext2,
			intop,
			intop2,
			intop3,
			types,
			include,
			exclude,
			notes,
			paid_services,
			places,
			transport,
			travellers,
			archive,
			solo_price,
			single_price,
			guaranted,
			new_type,
		},
	})

	res.json({ status: 200, data: tour })
}

export const ShowAllTours = async (req, res) => {
	const tour = await prisma.t_tour.findMany({})

	res.json({ status: 200, data: tour })
}

export const ShowTour = async (req, res) => {
	const { id } = req.params

	const tour = await prisma.t_tour.findUnique({
		where: {
			id: Number(id),
		},
	})

	if (!tour)
		return res.json({ status: 400, message: 'We could not find any tour' })

	res.json({ status: 200, data: tour })
}

export const DeleteTour = async (req, res) => {
	const { id } = req.params
	
	const tour = await prisma.t_tour.findUnique({
		where:{
			id:Number(id)
		}
	})

	if (!tour)
		return res.json({ status: 400, message: 'We could not find this tour' })

	const deletedTour = await prisma.t_tour.delete({
		where: {
			id: Number(id),
		},
	})

	res.json({
		status: 200,
		message: 'Tour deleted successfully',
		data: deletedTour,
	})
}
