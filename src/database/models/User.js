module.exports = (sequelize, dataTypes) => {
    let alias = "Users";
    let cols = {
        DNI: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: dataTypes.STRING(50)
        },
        surname: {
            type: dataTypes.STRING(50)
        },
        email: {
            type: dataTypes.STRING(30)
        },
        password: {
            type: dataTypes.STRING(100)
        },
        id_provice: {
            type: dataTypes.INTEGER(10)
        },
        address: {
            type: dataTypes.STRING(30)
        },
        avatar: {   
            type: dataTypes.STRING(100)
        },
       
        dateOfBirth: {
            type: dataTypes.DATE
        },
        phoneNumber: {
            type: dataTypes.INTEGER
        },
        created_at: {
            type: dataTypes.DATE
        },
    };
    let config = {
    tableName: "Users",
    timestamps: true, 
         createdAt:"created_at",
         updatedAt: false,
         deleteAt: false
                };
    
    const User = sequelize.define (alias, cols, config);
    
    return User;
}