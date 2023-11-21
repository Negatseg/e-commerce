// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category,{
  foreignKey:"category_id",
  onDelete:"CASCADE"
})

// Categories have many Products
Category.hasMany(Product,{
  foriegnKey:"category_id",
  onDelete: "CASCADE"
})

// Products belongToMany Tags (through ProductTag)
Category.belongsToMany(Tag,{
  through:ProductTag,foriegnKey:"product_id",
  onDelete: "CASCADE"
})

// Tags belongToMany Products (through ProductTag)
Category.belongsToMany(Product,{
  through:ProductTag,foriegnKey:"category_id",
  onDelete: "CASCADE"
})
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
