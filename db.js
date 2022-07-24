const Sequelize = require('sequelize')
const sequelize = new Sequelize('db_xtech','root','',{
dialect:'mysql',
host: 'localhost',
port: 3306
})

module.exports = sequelize;