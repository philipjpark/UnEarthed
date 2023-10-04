import express from 'express'
import GiftsController from '../controllers/gifts.js'

const router = express.Router()

router.get('/', GiftsController.getGifts)

router.get('/:giftId', GiftsController.getGiftById)

export default router


// import express from 'express'
// import GiftsController from '../controllers/gifts.js'

// const router = express.Router()

// router.get('/', GiftsController.getGifts)

// router.get('/:giftId', GiftsController.getGiftById)

// export default router

// import express from 'express'
// // import path from 'path'

// // import { fileURLToPath } from 'url'

// // import giftData from '../data/gifts.js'

// import GiftsController from '../controllers/gifts.js'

// // const __filename = fileURLToPath(import.meta.url)
// // const __dirname = path.dirname(__filename)

// const router = express.Router()


// router.get('/', GiftsController.getGifts)


// // router.get('/:giftId', (req, res) => {
// // res.status(200).sendFile(path.resolve(__dirname, '../public/gift.html'))
// // })

// router.get('/:giftId', GiftsController.getGiftById)

// export default router