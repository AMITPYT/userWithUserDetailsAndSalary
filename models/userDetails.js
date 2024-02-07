// models/userDetails.js

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:123456789@localhost:5432/UserDatabase');
const User = require('./user'); // Import User model

const UserDetails = sequelize.define('UserDetails', {

  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User, // This references the Bank model
      key: 'id', // This references the 'id' column in the Bank table
    },
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: true // Allow null for phone number
  },
  dateOfBirth: {
    type: DataTypes.STRING,
    allowNull: true // Allow null for date of birth
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true // Allow null for address
  }
},
 {
    timestamps: true,
  },
  );
  (async () => {
    try {
      await sequelize.sync();
      console.log('Database synchronized successfully');
    } catch (error) {
      console.error('Error synchronizing database:', error);
    }
  })();

// Define association with User model
UserDetails.belongsTo(User, { foreignKey: 'userId' }); // UserDetails belongs to User

module.exports = UserDetails;
