const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
  process.env.POSTGRESQL_URI, 
  { logging: false }
)

const verifyConnection = async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
    await sequelize.sync()
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

verifyConnection()

module.exports = sequelize