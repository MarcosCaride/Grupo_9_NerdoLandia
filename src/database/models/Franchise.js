module.exports = (sequelize, dataTypes) => {
    let alias = 'Franchise';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        franchise_name: {
            type: dataTypes.STRING(50)
        },
    };
    let options = {
        tableName: 'franchises',
        timestamps: false
    }
    const Franchise = sequelize.define(alias,cols,options);

    Franchise.associate = function (models){
        Franchise.hasMany(models.Product, {
            as: "franquicia_producto",
            foreignKey: "id_franchise"
        });
    }

    return Franchise;
}

//ojo franchise no tiene FK