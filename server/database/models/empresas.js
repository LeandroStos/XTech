'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Empresas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Empresas.hasMany(models.Vagas, {
        foreignKey: 'empresaId',
        as: 'Vagas'
      })
    }
  }
  Empresas.init({
    nome: DataTypes.STRING,
    cnpj: DataTypes.STRING,
    email: DataTypes.STRING,
    linkedin: DataTypes.STRING,
    endereco: DataTypes.STRING,
    cidade: DataTypes.STRING,
    estado: DataTypes.STRING,
    sobre: DataTypes.TEXT,
    password: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Empresas',
  });
  return Empresas;
};