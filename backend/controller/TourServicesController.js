import prisma from '../db/db.config.js'

export const CreateServices = async (req, res) => {
	const { type_id, type, title, icon, price, archive } = req.body

	const service = await prisma.t_tour_services.create({
		data: {
			type_id,
			type,
			title,
			icon,
			price,
			archive,
		},
	})

	return res.json({
		status: 200,
		data: service,
	})
}

export const ShowAllServices = async (req, res) => {
	const services = await prisma.t_tour_services.findMany({})

	if (!services)
		return res.json({ status: 400, message: 'We did not find any services' })

	return res.json({ status: 200, data: services })
}

export const ShowServices = async (req, res) => {
	const { id } = req.params

	const findServices = await prisma.t_tour_services.findUnique({
		where: {
			id: Number(id),
		},
	})

	if (!findServices)
		return res.json({ status: 400, message: 'We did not find this service' })

	return res.json({ status: 200, data: findServices })
}

export const EditServices = async (req, res) => {
	const { id } = req.params
	const { type_id, type, title, icon, price, archive } = req.body

	const findServices = await prisma.t_tour_services.findUnique({
		where: {
			id: Number(id),
		},
	})

	if (!findServices)
		return res.json({ status: 400, message: 'We did not find this service' })

	const EditServices = await prisma.t_tour_services.update({
		where: {
			id: Number(id),
		},
		data: {
			type_id,
			type,
			title,
			icon,
			price,
			archive,
		},
	})

	return res.json({
		status: 200,
		message: 'Services is edited successfully',
		data: EditServices,
	})
}

export const DeleteServices = async (req, res) => {
	const { id } = req.params

	const deleteServices = await prisma.t_tour_services.delete({
		where: {
			id: Number(id),
		},
	})

	return res.json({ status: 200, message: 'We deleted service successfully' })
}
