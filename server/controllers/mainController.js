const { Vagas } = require('../database/models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const controller = {
    main: (req, res) => {
        res.render('main');
    },
    search: async (req, res) => {
        let {busca} = req.query
        if(busca){
            let vagas = await Vagas.findAll({
                where:{
                    funcao:{
                        [Op.like]:`%${busca}%`
                    }
                },
                    order:[
                        ['createdAt','DESC']
                    ]
            });
            console.log(vagas);
            return res.render('vagas', {vagas});
        } else {
            return res.render('main', {
                errors:{
                    erro: {
                        message: "Sem resultado para busca!"
                    }
            }            

            })
        }

    },
    opcaoAcesso: (req, res) => {
        res.render('opcaoAcesso');
    },
    politica: (req, res) => {
        res.render('politicas');
    },
    sobre: (req, res) => {
        res.render('sobre');
    }
}

module.exports = controller;