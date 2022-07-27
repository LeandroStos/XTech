const { fstat } = require('fs');
const fs = require('fs');

const Empresas = {
    fileName: './database/empresas.json',

    create: function(empresaData){
        let allEmpresas = this.getEmpresas();
        let newEmpresa = {
            id: this.generateId(),
            ...empresaData
        }

        allEmpresas.push(newEmpresa);
        fs.writeFileSync(this.fileName, JSON.stringify(allEmpresas, null, ' '));
        return newEmpresa;
    },

    generateId: function() {
        let allEmpresas = this.getEmpresas();
        let lastEmpresa = allEmpresas.pop();

        if(lastEmpresa) {
            return lastEmpresa.id + 1;
        }
        return 1;
    },

    getEmpresas: function() {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
    },

    findEmpresaById: function (id) {
        let allEmpresas = this.getEmpresas();
        let empresaFound = allEmpresas.find(oneEmpresa => oneEmpresa.id === id);
        return empresaFound;
    },
    
    findEmpresaByField: function (field, value) {
        let allEmpresas = this.getEmpresas();
        let empresaFound = allEmpresas.find(oneEmpresa => oneEmpresa[field] === value);
        return empresaFound;
    }
}

module.exports = Empresas;