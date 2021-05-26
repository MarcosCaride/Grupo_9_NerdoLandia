module.exports = (sequelize, DataTypes) => {
    let alias = 'Product';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {type: DataTypes.STRING(50)},
        description: {type: DataTypes.TEXT},
        price: {type: DataTypes.INTEGER},
        image:{type: DataTypes.STRING(100)},
        id_franchise: {type: DataTypes.INTEGER(10)},
        created_at:  {type: DataTypes.DATE}
    };

    let options = {
        tableName: 'products',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: false,
        deletedAt: false
    }
    const Product = sequelize.define(alias,cols,options);

    Product.associate = function (models){
        Product.belongsTo(models.Franchise, {
            as: "franquicia-producto",
            foreignKey: "id_franchise",
        }) ,
        Product.belongsToMany(models.Category, {
            as: "categorias",
            through: "products_category",
            foreignKey: "id_products",
            timestamps: false,
        }) 
    }

    return Product;
}