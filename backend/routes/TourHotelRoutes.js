import { Router } from 'express'
import {
	CreateHotel,
	DeleteHotel,
	EditHotel,
	ShowAllHotels,
	ShowHotel,
} from '../controller/TourHotel.js'

const router = Router()

router.post('/', CreateHotel)
router.get('/', ShowAllHotels)
router.get('/:id', ShowHotel)
router.put('/:id', EditHotel)
router.delete('/:id', DeleteHotel)

export default router
