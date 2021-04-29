module.exports = (sequelize, dataTypes) => {
    let alias = 'Category';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        category_name: dataTypes.STRING(50),
    };
    let options = {
        tableName: 'categories',
        timestamps: false
    }
    const Category = sequelize.define(alias,cols,options);
    Category.associate = function (models){
        Category.hasMany(models.Product, {
            as: "categoria-producto",
            through: "ProductsCategory",
            foreignKey: "category_name",
            otherKey: "id_productsCategory",
            timestamps: false,
        });
    }

    return Category;
}