const Knex = require('knex')
const connection = require('../setup/database')
const { Model } = require('objection')

const knexConnection = Knex(connection)
Model.knex(knexConnection)
