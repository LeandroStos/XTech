const { fstat } = require('fs');
const fs = require('fs');

const Candidatos = {
    fileName: './database/candidatos.json',

    create: function(userData){
        let allUsers = this.getUsers();
        let newUser = {
            id: this.generateId(),
            ...userData
        }

        allUsers.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
        return newUser;
    },

    generateId: function() {
        let allUsers = this.getUsers();
        let lastUser = allUsers.pop();

        if(lastUser) {
            return lastUser.id + 1;
        }
        return 1;
    },

    getUsers: function() {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
    },

    findUserById: function (id) {
        let allUsers = this.getUsers();
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound;
    },
    findUserByField: function (field, value) {
        let allUsers = this.getUsers();
        let userFound = allUsers.find(oneUser => oneUser[field] === value);
        return userFound;
    }
}

module.exports = Candidatos;