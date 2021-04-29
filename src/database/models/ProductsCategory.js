module.exports = (sequelize, dataTypes) => {
    let alias = 'ProductsCategory';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
       id_category: dataTypes.INTEGER(10),
       id_products: dataTypes.INTEGER(10),
    };
    let options = {
        tableName: 'products-categories',
        timestamps: false
    }
    const ProductsCategory= sequelize.define(alias,cols,options);

    ProductsCategory.associate = function (models){
        ProductsCategory.belongsToMany(models.Product, {
            as: "relacionCategoryProduct",
            foreignKey: "id_products",
        }) 
    }

    return ProductsCategory;
}

    



//en let options en PG ponen let config