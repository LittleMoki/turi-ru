import { Router } from 'express'
import {
	CreateTour,
	DeleteTour, DeleteTourFaq, DeleteTourImages, DeleteTourToday, EditTour,
	ShowAllTours,
	ShowTour,
} from '../controller/MainTourController.js'

const router = Router()

router.post('/', CreateTour)
router.get('/', ShowAllTours)
router.get('/:id', ShowTour)
router.put('/:id', EditTour)
router.delete('/:id', DeleteTour)
router.delete('/:id/tourtoday', DeleteTourToday)
router.delete('/:id/faq', DeleteTourFaq)
router.delete('/:id/images', DeleteTourImages)

export default router
