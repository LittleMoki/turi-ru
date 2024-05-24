import { Router } from 'express'
import {
	tourCreate,
	tourDelete,
	tourShow,
} from '../controller/TourTypeController.js'

const router = Router()

router.post('/', tourCreate)
router.get('/', tourShow)
router.delete('/:id', tourDelete)

export default router