import cors from 'cors'
import express from 'express'
import router from './routes/index.js'

const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }))

app.use(router)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
