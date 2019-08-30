import { Request, Response, NextFunction } from 'express'
import { Book } from '../../models/book'

export const getBooks = async (req: Request, res: Response, next: NextFunction) => {
	// select * from "users";
	const users = await Book.query()
	res.status(200).send({
		ok: true,
		users,
	})
}
