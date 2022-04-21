'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Course.belongsToMany(models.User, {through: "User_Courses"})
    }
  }
  Course.init({
    name: DataTypes.STRING,
    imageURL: DataTypes.TEXT,
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};