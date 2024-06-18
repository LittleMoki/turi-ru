import prisma from '../db/db.config.js'

// Create Exchange

export const ExchangeCreate = async (req, res) => {
	const { title, name, symbol, exchange_rate, primary_valuta } = req.body

	const exchange = await prisma.t_exchange.create({
		data: {
			title,
			name,
			symbol,
			exchange_rate,
			primary_valuta,
		},
	})
	return res.json({
		status: 200,
		data: exchange,
		message: 'exchange created successfully',
	})
}

// Delete Exchange
export const ExchangeDelete = async (req, res) => {
	const { id } = req.params

	const deleteExchange = await prisma.t_exchange.delete({
		where: {
			id: Number(id),
		},
	})

	return res.json({ status: 200, message: 'Valuta deleted successfully' })
}

// show all exchange
export const ExchangeShowAll = async (req, res) => {
	const exchange = await prisma.t_exchange.findMany({})

	return res.json({ status: 200, data: exchange })
}

// Edit exchange
export const ExchangeEdit = async (req, res) => {
	const { id } = req.params
	const { title, name, symbol, exchange_rate, primary_valuta } = req.body
	const findExchange = await prisma.t_exchange.findUnique({
		where: {
			id: Number(id),
		},
	})
	if (!findExchange) {
		return res.json({ status: 400, message: 'We did not find this valuta' })
	}

	const exchange = await prisma.t_exchange.update({
		where: {
			id: Number(id),
		},
		data: { title, name, symbol, exchange_rate, primary_valuta },
	})

	res.json({ status: 200, data: exchange, message: 'Exchange is updated' })
}
