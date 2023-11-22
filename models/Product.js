// // import important parts of sequelize library
// const { Model, DataTypes } = require('sequelize');
// // import our database connection from config.js
// const sequelize = require('../config/connection');

// // Initialize Product model (table) by extending off Sequelize's Model class
// class Product extends Model {}

// // set up fields and rules for Product model
// Product.init(
//   {
//     // define columns
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'product',
//   }
// );

// module.exports = Product;




// Import important parts of Sequelize library
const { Model, DataTypes } = require('sequelize');

// Import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// Set up fields and rules for Product model
Product.init(
  {
    // Define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {isNumeric:true}
    },
    // Add more columns as needed

    // Example foreign key:
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'category', // Assuming you have a 'category' model/table
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;