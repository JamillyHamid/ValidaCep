const Sequelize = require('sequelize')
const config =('../config/database')

const Endereco = require('../Model/Endereco')
const connection = new Sequelize(config)

Endereco.init(connection)
Endereco.associate(connection.models)

module.exports = connection