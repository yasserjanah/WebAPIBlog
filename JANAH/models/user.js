'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Article);
    }
  };
  User.init({
    username: {
    	type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    email: {
    	type: DataTypes.STRING,
    	unique: true,
    	allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    freezeTableName: true,
    instanceMethods: {
		generateHash(password) {
			return bcrypt.hash(password, bcrypt.genSaltSync(8));
        },
        validPassword(password) {
            return bcrypt.compare(password, this.password);
        }
    }
  });
  return User;
};
