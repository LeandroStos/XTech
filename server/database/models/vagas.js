'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vagas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Vagas.belongsTo(models.Empresas, {
        foreignKey: 'empresaId',
        as: 'empresa'
      })
    }
  }
  Vagas.init({
    funcao: DataTypes.STRING,
    salario: DataTypes.FLOAT,
    modalidade: DataTypes.STRING,
    segmento: DataTypes.STRING,
    habilidades: DataTypes.STRING,
    data: DataTypes.DATE,
    empresaId: DataTypes.INTEGER,
    cidade: DataTypes.STRING,
    estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Vagas',
  });
  return Vagas;
};