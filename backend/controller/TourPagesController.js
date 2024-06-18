import prisma from '../db/db.config.js'

// Create Page

export const CreatePage = async (req, res) => {
	const {
		pagename,
		isdel,
		metakeywords,
		metadescription,
		title,
		titlename,
		description,
	} = req.body
	const page = await prisma.t_pages.create({
		data: {
			pagename,
			isdel,
			metakeywords,
			metadescription,
			title,
			titlename,
			description,
		},
	})

	return res.json({ status: 200, message: 'Page created successfully' })
}

// Delete Page

export const DeletePage = async (req, res) => {
	const { id } = req.params

	const page = await prisma.t_pages.delete({
		where: {
			id: Number(id),
		},
	})

	return res.json({ status: 200, message: 'Page deleted successfully' })
}

// Show all Pages

export const ShowAllPages = async (req, res) => {
	const pages = await prisma.t_pages.findMany({})

	if (!pages)
		return res.json({ status: 400, message: 'We did not find any pages' })

	return res.json({ status: 200, data: pages })
}

// Show Page

export const ShowPage = async (req, res) => {
	const { id } = req.params
	const page = await prisma.t_pages.findUnique({
		where: {
			id: Number(id),
		},
	})

	if (!page)
		return res.json({ status: 400, message: 'We did not find any pages' })

	return res.json({ status: 200, data: page })
}

// Edit Page

export const EditPage = async (req, res) => {
	const { id } = req.params
	const {
		pagename,
		isdel,
		metakeywords,
		metadescription,
		title,
		titlename,
		description,
	} = req.body

	const page = await prisma.t_pages.update({
		where: {
			id: Number(id),
		},
		data: {
			pagename,
			isdel,
			metakeywords,
			metadescription,
			title,
			titlename,
			description,
		},
	})
	return res.json({ status: 200, message: 'Page is edited', data: page })
}
