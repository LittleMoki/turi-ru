import { Router } from 'express'
import {
	CreateCountry,
	DeleteCountry,
	EditCountry,
	ShowAllCountries,
	ShowCountry,
} from '../controller/TourCountryController.js'

const router = Router()

router.post('/', CreateCountry)
router.get('/', ShowAllCountries)
router.get('/:id', ShowCountry)
router.put('/:id', EditCountry)
router.delete('/:id', DeleteCountry)

export default router
