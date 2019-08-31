import { getBooks } from './controllers'

export default [
	{
		path: '/books',
		method: 'get',
		handler: [getBooks],
	},
]
