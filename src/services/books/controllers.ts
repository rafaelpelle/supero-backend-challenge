import { Request, Response, NextFunction } from 'express'
import { Book } from '../../models/book'

export const getBooks = async (req: Request, res: Response, next: NextFunction) => {
	const { initialDate, endDate, searchTerm } = req.query
	let books = []

	if (searchTerm) {
		const subquery = Book.query()
			.orWhere('title', 'like', `%${searchTerm}%`)
			.orWhere('author', 'like', `%${searchTerm}%`)
			.orWhere('isbn', 'like', `%${searchTerm}%`)
			.select('id')
		books =
			!initialDate && !endDate
				? await Book.query().where('id', 'in', subquery)
				: await Book.query()
						.whereBetween('year', [initialDate, endDate])
						.andWhere('id', 'in', subquery)
	} else {
		books =
			!initialDate && !endDate
				? await Book.query()
				: await Book.query().whereBetween('year', [initialDate, endDate])
	}

	res.status(200).send({
		ok: true,
		books,
		initialDate,
		endDate,
		searchTerm,
	})
}
