const db = require('../database/models');

const Category = db.Category
const Product = db.Product

exports.addProduct = (categoryId, ProductId) => {
    return Category.findByPk(categoryId)
      .then((category) => {
        if (!category) {
          console.log("category not found!");
          return null;
        }
        return Product.findOne({
            where: {
                name:ProductId
            }
        }).then((Product) => {
          if (!Product) {
            console.log("Product not found!");
            return null;
          }
  
          category.addProduct(Product);
          console.log(`>> added Product id=${Product.id} to category id=${category.id}`);
          return category;
        });
      })
      .catch((err) => {
        console.log(">> Error while adding Product to category: ", err);
      });
  };