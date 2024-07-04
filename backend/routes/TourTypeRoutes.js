
import { Router } from 'express'
import {
	tourCreate,
	tourDelete, tourEdit,
	tourShow, tourShowAll,
} from '../controller/TourTypeController.js'

const router = Router()

router.post('/', tourCreate)
router.get('/', tourShowAll)
router.get('/:id', tourShow)
router.put('/:id', tourEdit)
router.delete('/:id', tourDelete)

export default router