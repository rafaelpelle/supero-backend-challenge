import { Request, Response, NextFunction } from 'express'
import { Book } from '../../models/book'

export const getBooks = async (req: Request, res: Response, next: NextFunction) => {
	const { initialDate, endDate } = req.query

	const books =
		!initialDate && !endDate
			? await Book.query()
			: await Book.query().whereBetween('year', [initialDate, endDate])

	res.status(200).send({
		ok: true,
		books,
	})
}
