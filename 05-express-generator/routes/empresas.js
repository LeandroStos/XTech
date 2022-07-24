const Sequelize = require("sequelize")
const sequelize = require('./db');


const empresas = database.define ('empresas', {
  empresa_id: {
    type: Sequelize.integer,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },

  nome_empresa {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Documento {
    type: Number,
    allowNull: false
  },
  email {
    type: Sequelize.STRING,
    allowNull: false
  },
  endereco_id {
    type: ForeignKey Reference(endereco_id),
    allowNull: false
  },
  criadoEm {
    type: Date,
    allowNull: false
  },
  modificadoEm {
    type: Date,
    allowNull: false
  }
})
module.exports = empresas