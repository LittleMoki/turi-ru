import prisma from '../db/db.config.js'

export const tourCreate = async (req, res) => {
	const {
		parent,
		name,
		type,
		url,
		photo,
		description,
		title,
		metakeywords,
		metadescription,
		sorting,
	} = req.body

	let tour = await prisma.t_types.create({
		data: {
			parent,
			name,
			type,
			url,
			photo,
			description,
			title,
			metakeywords,
			metadescription,
			sorting,
		},
	})

	return res.json({ status: 200, data: tour, message: 'tour created' })
}
export const tourShow = async (req, res) => {
	const tours = await prisma.t_types.findMany({
		include: {
			tour_type: true,
		},
	})

	return res.json({ status: 200, data: tours })
}
export const tourDelete = async (req, res) => {
	const { id } = req.params

	const tour_delete = await prisma.t_types.delete({
		where: {
			id: Number(id),
		},
	})

	res.json({
		status: 200,
		message: 'tour deleted successfully',
	})
}
