import { Router } from 'express'
import TourTypeRoutes from './TourTypeRoutes.js'
import TourExchange from './TourExchangeRoutes.js'
import TourFAQRoutes from './TourFAQRoutes.js'
import TourPage from './TourPageRoutes.js'

const router = Router()

router.use('/tour_type', TourTypeRoutes)
router.use('/exchange', TourExchange)
router.use('/faq',TourFAQRoutes)
router.use('/staticpage',TourPage)

export default router
