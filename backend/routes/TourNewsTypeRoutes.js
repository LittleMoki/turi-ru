import { Router } from 'express'
import {
	CreateNewsType,
	DeleteNewsType,
	ShowAllNewsType,
	ShowNewsType,
} from '../controller/TourNewsTypeController.js'

const router = Router()

router.post('/', CreateNewsType)
router.get('/', ShowAllNewsType)
router.get('/:id', ShowNewsType)
router.delete('/:id', DeleteNewsType)

export default router
