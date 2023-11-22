// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


Product.belongsTo(Category,{
  foreignKey:"category_id",
  onDelete:"CASCADE"
})


Category.hasMany(Product,{
  foriegnKey:"category_id",
  onDelete: "CASCADE"
})


Product.belongsToMany(Tag,{
  through:ProductTag,foriegnKey:"product_id",
  onDelete: "CASCADE"
})

Tag.belongsToMany(Product,{
  through:ProductTag,foriegnKey:"tag_id",
  onDelete: "CASCADE"
})
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
