import { Router } from 'express'
import MainTourRoutes from './MainTourRoutes.js'
import TourBannerRoutes from './TourBannerRoutes.js'
import TourCityRoutes from './TourCityRoutes.js'
import TourCountryRoutes from './TourCountryRoutes.js'
import TourExchange from './TourExchangeRoutes.js'
import TourFAQRoutes from './TourFAQRoutes.js'
import TourHotelRoutes from './TourHotelRoutes.js'
import TourPageRoutes from './TourPageRoutes.js'
import TourPlaceRoutes from './TourPlaceRoutes.js'
import TourNewsRoutes from './TourNewsRoutes.js'
import TourNewsTypeRoutes from './TourNewsTypeRoutes.js'
import TourTypeRoutes from './TourTypeRoutes.js'

const router = Router()

router.use('/tour_type', TourTypeRoutes)
router.use('/exchange', TourExchange)
router.use('/faq', TourFAQRoutes)
router.use('/page', TourPageRoutes)
router.use('/hotel', TourHotelRoutes)
router.use('/place', TourPlaceRoutes)
router.use('/country', TourCountryRoutes)
router.use('/city', TourCityRoutes)
router.use('/tour', MainTourRoutes)
router.use('/banner', TourBannerRoutes)
router.use('/news', TourNewsRoutes)
router.use('/news_type', TourNewsTypeRoutes)

export default router
