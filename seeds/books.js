const faker = require('faker')

exports.seed = function(knex) {
	// Deletes ALL existing entries
	if (process.env.NODE_ENV !== 'production') {
		return knex('books')
			.del()
			.then(function() {
				// Inserts seed entries
				return knex('books').insert([
					{
						id: faker.random.uuid(),
						title: faker.name.title(),
						author: faker.name.findName(),
						isbn: faker.random.number({ min: 1000000000000, max: 9999999999999 }),
					},
				])
			})
	}
}
