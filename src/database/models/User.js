module.exports = (sequelize, dataTypes) => {
    let alias = "Users";
    let cols = {
        DNI: {
            type: dataTypes.INT,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: dataTypes.VARCHAR
        },
        surname: {
            type: dataTypes.VARCHAR
        },
        email: {
            type: dataTypes.VARCHAR
        },
        password: {
            type: dataTypes.VARCHAR
        },
        id_provice: {
            type: dataTypes.INT
        },
        address: {
            type: dataTypes.VARCHAR
        },
        avatar: {   
            type: dataTypes.VARCHAR
        },
       
        dateOfBirth: {
            type: dataTypes.DATE 
        },
        phoneNumber: {
            type: dataTypes.INT
        },
        created_ad: {
            type: dataTypes.DATETIME
        },
    };
    let config = {
    tableName: "Users",
    timestamps: false};
    
    const User = sequelize.define (alias, cols, config);
    
    return User;
}