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
            through: "products_category",
            as: "productos",
            foreignKey: "id_category",
            timestamps: false,
        });
    }

    return Category;
}