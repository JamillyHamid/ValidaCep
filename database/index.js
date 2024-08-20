const Sequelize = require('sequelize')
const config =('../config/database')

const Endereco = require('../models/Endereco')
const connection = new Sequelize(config)

Endereco.init(connection)
Endereco.ssociate(connection.models)

module.exports = connection