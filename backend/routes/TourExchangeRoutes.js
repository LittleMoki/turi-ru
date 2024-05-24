import { Router } from 'express'
import {
	ExchangeCreate,
	ExchangeDelete,
	ExchangeEdit,
	ExchangeShowAll,
} from '../controller/TourExchangeController.js'

const router = Router()

router.get('/', ExchangeShowAll)
router.post('/', ExchangeCreate)
router.get('/:id', ExchangeShowAll)
router.put('/:id', ExchangeEdit)
router.delete('/:id', ExchangeDelete)

export default router
