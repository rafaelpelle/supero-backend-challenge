import { Request, Response, NextFunction } from 'express'
import { Book } from '../../models/book'

export const getBooks = async (req: Request, res: Response, next: NextFunction) => {
	const { initialDate, endDate, searchTerm } = req.query
	const page = req.query.page || 0
	const limit = 10
	const offset = page * limit
	let books = []

	const { count: totalBooks } = await Book.query()
		.count('id')
		.first()

	if (searchTerm) {
		const subquery = Book.query()
			.orWhere('title', 'like', `%${searchTerm}%`)
			.orWhere('author', 'like', `%${searchTerm}%`)
			.orWhere('isbn', 'like', `%${searchTerm}%`)
			.select('id')
		books =
			!initialDate && !endDate
				? await Book.query()
						.where('id', 'in', subquery)
						.limit(limit)
						.offset(offset)
				: await Book.query()
						.limit(limit)
						.offset(offset)
						.whereBetween('year', [initialDate, endDate])
						.andWhere('id', 'in', subquery)
	} else {
		books =
			!initialDate && !endDate
				? await Book.query()
						.limit(limit)
						.offset(offset)
				: await Book.query()
						.whereBetween('year', [initialDate, endDate])
						.limit(limit)
						.offset(offset)
	}

	res.status(200).send({
		ok: true,
		totalBooks,
		books,
	})
}
