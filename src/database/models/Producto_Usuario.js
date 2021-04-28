module.exports = (sequelize, dataTypes) => {
    let alias = "Productos_Usuarios";
    let cols = {
        ID: {
            type: dataTypes.INT(10),
            primaryKey: true,
            autoIncrement: true,
        },
        id_users: {
            ForeignKey : true,
            type: dataTypes.INT(10)
        },
        id_products: {
            ForeignKey : true,
            type: dataTypes.INT(10)
        }
    };
    let config = {
    tableName: "Productos_Usuarios",
    timestamps: false};
    
    const Producto_Usuario = sequelize.define (alias, cols, config);
    
    return Producto_Usuario;
}