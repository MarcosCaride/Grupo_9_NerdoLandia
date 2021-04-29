module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: dataTypes.STRING(50),
        description: dataTypes.TEXT,
        price: dataTypes.INTEGER,
        image:dataTypes.STRING(100) ,
        id_franchise: dataTypes.INTEGER(10),
        id_productsCategory:  dataTypes.INTEGER(10),
        created_at:  dataTypes.DATE,
    };
    let options = {
        tableName: 'products',
    }
    const Product = sequelize.define(alias,cols,options);

    Product.associate = function (models){
        Product.belongsTo(models.Franchise, {
            as: "franquicia-producto",
            foreignKey: "id_franchise",
        }) ,
        Product.belongsToMany(models.Category, {
            as: "producto-categoria",
            through: "ProductsCategory",
            foreignKey: "id_productsCategory",
            otherKey: "id_products",
            timestamps: false,
        }) 
    }

    return Product;
}