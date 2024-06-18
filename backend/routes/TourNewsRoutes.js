import { Router } from 'express'
import {
	CreateNews,
	DeleteNews,
	ShowAllNews,
	ShowNews,
} from '../controller/TourNewsController.js'

const router = Router()

router.post('/', CreateNews)
router.get('/', ShowAllNews)
router.get('/:id', ShowNews)
router.delete('/:id', DeleteNews)

export default router
