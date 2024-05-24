import prisma from '../db/db.config.js'

// Create FAQ
export const FAQCreate = async (req, res) => {
	const { name, description, archive } = req.body

	const FAQ = await prisma.t_faq.create({
		data: {
			name,
			description,
			archive,
		},
	})

	return res.json({ status: 200, message: 'FAQ created successfully' })
}

// Delete FAQ

export const FAQDelete = async (req, res) => {
	const { id } = req.params
	const findFAQ = await prisma.t_faq.delete({
		where: {
			id: Number(id),
		},
	})

	return res.json({ status: 200, message: 'FAQ deleted successfully' })
}

// Show all FAQ

export const FAQShowAll = async (req, res) => {
	const FAQ = await prisma.t_faq.findMany({})

	if (!FAQ) return res.json({ status: 400, message: 'We did not find any FAQ' })

	return res.json({ status: 200, data: FAQ })
}

// Show FAQ

export const FAQShow = async (req, res) => {
	const { id } = req.params

	const FAQ = await prisma.t_faq.findUnique({
		where: {
			id: Number(id),
		},
	})
	if (!FAQ) return res.json({ status: 400, message: 'We did not find any FAQ' })

	return res.json({ status: 200, data: FAQ })
}

// Edit FAQ

export const FAQEdit = async (req, res) => {
	const { id } = req.params
	const { name, description, archive } = req.body

	const FAQ = await prisma.t_faq.update({
		where: {
			id: Number(id),
		},
		data: {
			name,
			description,
			archive,
		},
	})

	return res.json({
		status: 200,
		message: 'FAQ updated successfully',
		data: FAQ,
	})
}