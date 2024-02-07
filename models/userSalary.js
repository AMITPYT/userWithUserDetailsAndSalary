// models/userDetails.js

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:123456789@localhost:5432/UserDatabase');
const User = require('./user');
const UserDetails = require('./userDetails'); // Import User model

const UserSalary = sequelize.define('UserSalary', {

  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User, // This references the Bank model
      key: 'id', // This references the 'id' column in the Bank table
    },
  },
  userDetailedId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: UserDetails, // This references the Bank model
      key: 'id', // This references the 'id' column in the Bank table
    },
  },
  Salary: {
    type: DataTypes.STRING,
    allowNull: true // Allow null for phone number
  },
  AnnualSalary: {
    type: DataTypes.STRING,
    allowNull: true // Allow null for date of birth
  },
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
UserSalary.belongsTo(User, { foreignKey: 'userId' });
UserSalary.belongsTo(UserDetails, { foreignKey: 'userDetailedId' }); // UserDetails belongs to User

module.exports = UserSalary;
