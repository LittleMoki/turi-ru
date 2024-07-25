import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
	log: ['query'],
	datasources: {
		db: {
			url: 'your-database-url',
		},
	},
	pool: {
		max: 10, // Увеличьте лимит соединений
		timeout: 30, // Увеличьте время ожидания
	},
})

export default prisma
