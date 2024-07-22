import axios from 'axios'

export const api = axios.create({
	baseURL: 'https://api.dev.turi-uzbekistana.ru/',
})
