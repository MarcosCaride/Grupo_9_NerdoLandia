module.exports = (sequelize, DataTypes) => {
    let alias = 'Category';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        category_name: DataTypes.STRING(50),
    };
    let options = {
        tableName: 'categories',
        timestamps: false
    }
    const Category = sequelize.define(alias,cols,options);
    Category.associate = function (models){
        Category.belongsToMany(models.Product, {
            as: "categoria-producto",
            through: "products_category",
            foreignKey: "category_name",
            otherKey: "id_productsCategory",
            timestamps: false,
        });
    }

    return Category;
}