// create news

import prisma from '../db/db.config.js'

export const CreateNews = async (req, res) => {
	const {
		new_date,
		header,
		body,
		firsttext,
		lang,
		typeId,
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
	} = req.body

	const news = await prisma.t_news.create({
		data: {
			new_date,
			header,
			body,
			firsttext,
			lang,
			typeId,
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
		},
	})

	res.json({ status: 200, data: news })
}

// get news

export const 	ShowAllNews = async (req, res) => {
	const news = await prisma.t_news.findMany({
		include:{
			type:true
		}
	})

	return res.json({ status: 200, data: news })
}

// get by id news

export const ShowNews = async (req, res) => {
	const { id } = req.params

	const news = await prisma.t_news.findUnique({
		where: {
			id: Number(id),
		},
	})

	if (!news)
		return res.json({ status: 400, message: 'We did not find any news' })

	res.json({ status: 200, data: news })
}

// delete news

export const DeleteNews = async (req, res) => {
	const { id } = req.params

	const findNews = await prisma.t_news.findUnique({
		where: {
			id: Number(id),
		},
	})

	if (!findNews)
		return res.json({ status: 400, message: 'We did not find any news' })

	const news = await prisma.t_news.delete({
		where: {
			id: Number(id),
		},
	})

	res.json({ status: 200, message: 'We deleted news successfully' })
}