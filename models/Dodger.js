const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

class Dodger extends Model {

  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }

};

Dodger.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    dodgername: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4]
      }
    },
    gamesWon: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    gamesLoss: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  },
  {
    hooks: {
      async beforeCreate(newDodgerData) {
        newDodgerData.password = await bcrypt.hash(newDodgerData.password, 10);
        return newDodgerData;
      },
      async beforeUpdate(updatedDodgerData) {
        updatedDodgerData.password = await bcrypt.hash(updatedDodgerData.password, 10)
        return updatedDodgerData;
      }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'dodger'
  }
);

module.exports = Dodger;