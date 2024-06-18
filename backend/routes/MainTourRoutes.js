import { Router } from 'express'
import {
	CreateTour,
	DeleteTour,
	ShowAllTours,
	ShowTour,
} from '../controller/MainTourController.js'

const router = Router()

router.post('/', CreateTour)
router.get('/', ShowAllTours)
router.get('/:id', ShowTour)
router.delete('/:id', DeleteTour)

export default router
