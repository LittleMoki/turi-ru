// create news_type

import prisma from '../db/db.config.js'

export const CreateNewsType = async (req, res) => {
	const {
		name,
		description,
		photo,
		url,
		title,
		metakeywords,
		metadescription,
	} = req.body

	const newsType = await prisma.t_news_type.create({
		data: {
			name,
			description,
			photo,
			url,
			title,
			metakeywords,
			metadescription,
		},
	})

	return res.json({ status: 200, data: newsType })
}

// get news_type

export const ShowAllNewsType = async (req, res) => {
	const newsType = await prisma.t_news_type.findMany({
		include: {
			_count: true,
		},
	})

	return res.json({ status: 200, data: newsType })
}

// get by id news_type

export const ShowNewsType = async (req, res) => {
	const { id } = req.params

	const newsType = await prisma.t_news_type.findUnique({
		where: {
			id: Number(id),
		},
		include: {
			news: true,
		},
	})

	if (!newsType)
		return res.json({ status: 400, message: 'We did not find any newsType' })

	return res.json({ status: 200, data: newsType })
}

export const EditNewsType = async (req, res) => {
	const { id } = req.params

	const {
		name,
		description,
		photo,
		url,
		title,
		metakeywords,
		metadescription,
	} = req.body

	const newType = await prisma.t_news_type.update({
		where: {
			id: Number(id),
		},
		data: {
			name,
			description,
			photo,
			url,
			title,
			metakeywords,
			metadescription,
		},
	})
	return res.json({ status: 200, data: newType })
}

// delete news_type

export const DeleteNewsType = async (req, res) => {
	const { id } = req.params

	const findNewsType = await prisma.t_news_type.findUnique({
		where: {
			id: Number(id),
		},
	})

	if (!findNewsType)
		return res.json({ status: 400, message: 'We did not find any newsType' })

	const newsType = await prisma.t_news_type.delete({
		where: {
			id: Number(id),
		},
	})

	return res.json({ status: 200, message: 'We deleted news type successfully' })
}
