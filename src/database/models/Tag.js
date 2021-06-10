module.exports = (sequelize, dataTypes) => {
    let alias = 'Tag';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tag_name: {
            type: dataTypes.STRING(50)
        },
    };
    let options = {
        tableName: 'tag',
        timestamps: false
    }
    const Tag = sequelize.define(alias,cols,options);

    Tag.associate = function (models){
        Tag.hasMany(models.Product, {
            as: "productoTag",
            foreignKey: "id_tag"
        });
    }

    return Tag;
}