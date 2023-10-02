import express from 'express'
import path from 'path'

//Import the fileURLToPath method from the url module.
import { fileURLToPath } from 'url'

//Import giftData from the data/gift.js.
import giftData from '../data/gifts.js'

import GiftsController from '../controllers/gifts.js'

//Convert the import.meta.url property to a file path and store the result in a variable called __filename
const __filename = fileURLToPath(import.meta.url)

//Create a variable called __dirname to contain the directory name of the current module file.
const __dirname = path.dirname(__filename)

//Create an Express router.
const router = express.Router()

//Create a GET route at the / endpoint that responds with status 200 and sends a JSON of the giftData.
// router.get('/', (req, res) => {
//     res.status(200).json(giftData)
//   })

router.get('/', GiftsController.getGifts)

//Create another GET route at the /:giftId endpoint that responds with status 200 and sends the gift.html file (we'll be creating this later).
router.get('/:giftId', (req, res) => {
res.status(200).sendFile(path.resolve(__dirname, '../public/gift.html'))
})

//Export the router.
export default router