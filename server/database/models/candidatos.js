'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Candidatos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Candidatos.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    genero: DataTypes.STRING,
    segmento: DataTypes.STRING,
    list: DataTypes.STRING,
    data_nascimento: DataTypes.DATE,
    endereco: DataTypes.STRING,
    cidade: DataTypes.STRING,
    estado: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Candidatos',
  });
  return Candidatos;
};