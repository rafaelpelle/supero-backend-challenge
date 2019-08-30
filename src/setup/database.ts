require('dotenv').config()

const { DATABASE_URL } = process.env

module.exports = {
	client: 'pg',
	connection: DATABASE_URL,
}
