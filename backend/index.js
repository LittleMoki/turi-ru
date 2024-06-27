import express from 'express'
import fs from 'fs'
import multer from 'multer'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		fs.mkdir(
			path.join(__dirname, '../frontend/uploads'),
			{ recursive: true },
			err => {
				if (err && err.code !== 'EEXIST') {
					return cb(err)
				}
				cb(null, path.join(__dirname, '../frontend/uploads'))
			}
		)
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname)
	},
})

const upload = multer({ storage: storage })

app.post('/upload', upload.single('file'), (req, res) => {
	res.json({ location: req.file.originalname })
})

app.get('/uploads/:filename', (req, res) => {
	const filename = req.params.filename
	const filepath = path.join(__dirname, '../frontend/uploads', filename)

	fs.access(filepath, fs.constants.F_OK, err => {
		if (err) {
			return res.status(404).send('File not found')
		}
		res.sendFile(filepath)
	})
})

app.listen(4000, () => {
	console.log('Server is running on port 4000')
})
