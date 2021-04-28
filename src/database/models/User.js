module.exports = (sequelize, dataTypes) => {
    let alias = "Users";
    let cols = {
        DNI: {
            type: dataTypes.INT,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: dataTypes.VARCHAR(50)
        },
        surname: {
            type: dataTypes.VARCHAR(50)
        },
        email: {
            type: dataTypes.VARCHAR(30)
        },
        password: {
            type: dataTypes.VARCHAR(100)
        },
        id_provice: {
            type: dataTypes.INT(10)
        },
        address: {
            type: dataTypes.VARCHAR(30)
        },
        avatar: {   
            type: dataTypes.VARCHAR(100)
        },
       
        dateOfBirth: {
            type: dataTypes.DATE
        },
        phoneNumber: {
            type: dataTypes.INT
        },
        created_at: {
            type: dataTypes.DATETIME
        },
    };
    let config = {
    tableName: "Users",
    timestamps: false};
    
    const User = sequelize.define (alias, cols, config);
    
    return User;
}