import { Router } from 'express'
import TourTypeRoutes from './TourTypeRoutes.js'

const router = Router()

router.use('/tour_type', TourTypeRoutes)

export default router
