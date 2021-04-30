module.exports = (sequelize, DataTypes) => {
    let alias = 'Product';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING(50),
        description: DataTypes.TEXT,
        price: DataTypes.INTEGER,
        image:DataTypes.STRING(100),
        id_franchise: DataTypes.INTEGER(10),
        id_productsCategory:  DataTypes.INTEGER(10),
        created_at:  DataTypes.DATE,
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
            through: "products_category",
            foreignKey: "id_productsCategory",
            otherKey: "id_products",
            timestamps: false,
        }) 
    }

    return Product;
}