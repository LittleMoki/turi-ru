import { Router } from 'express'
import {
	CreateCountry,
	DeleteCountry,
	EditCountry,
	ShowAllCountries,
} from '../controller/TourCountryController.js'

const router = Router()

router.post('/', CreateCountry)
router.get('/', ShowAllCountries)
router.get('/:id', ShowAllCountries)
router.put('/:id', EditCountry)
router.delete('/:id', DeleteCountry)

export default router
