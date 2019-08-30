exports.up = function(knex) {
	return Promise.all([
		knex.schema.createTable('books', (table) => {
			table.uuid('id').primary()
			table.string('title').unique()
			table.string('author')
			table.string('isbn')
		}),
	])
}

exports.down = function(knex) {
	return Promise.all([knex.schema.dropTable('books')])
}
