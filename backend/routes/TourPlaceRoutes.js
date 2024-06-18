import { Router } from 'express'
import {
	CreatePlace,
	DeletePlace,
	EditPlace,
	ShowAllPlace,
	ShowPlace,
} from '../controller/TourPlaceController.js'

const router = Router()

router.post('/', CreatePlace)
router.get('/', ShowAllPlace)
router.get('/:id', ShowPlace)
router.put('/:id', EditPlace)
router.delete('/:id', DeletePlace)

export default router
