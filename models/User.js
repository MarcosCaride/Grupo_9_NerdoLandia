const fs = require('fs')

const User = {
    fileName: './data/usersData.json',

    getData: function() {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'))
    },

    findAll: function(){
        return this.getData()
    },

    generateID: function( ){
        let allUsers = this.findAll()
        let lastUser = allUsers.pop()
        if(lastUser){
            return lastUser.id  + 1
        }
        return 1
    },
    
    findByField: function (field, text) {
        let allUsers = this.findAll() 
        let userFound = allUsers.find(oneUser => oneUser[field] === text)
        return userFound
    },

    create: function(userData) {
        let allUsers = this.findAll()
        let newUser = {
            id: this.generateID(),
            ...userData

        } 
        allUsers.push(newUser)
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '))
        return true
    },


    delete: function (id) {
        let allUsers = this.findAll()
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id)
        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ' '))
        return true
    }
}

module.exports = User;      