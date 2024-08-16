'use strict';

const { QueryInterface, Sequelize } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('enderecos', {
      Id: {
        type: Sequelize.INTERGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      Cep: {
        type: Sequelize.STRING,
        alowNull: false,
      },
      Logadouro: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Numero: {
        type: Sequelize.INTERGER,
        allowNull: false,
      },
      Complemento: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Bairros: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Cidade: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Estado: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      MunicipioIBGE: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('enderecos');
  }
};
