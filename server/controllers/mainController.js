const { Vagas, Empresas } = require('../database/models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const controller = {
    main: async (req, res) => {
        let empresas = await Empresas.findAll();
        let vagas = await Vagas.findAll();
        res.render('main', {
            empresas: empresas.length,
            vagas: vagas.length
        });
    },
    search: async (req, res) => {
        let { busca } = req.query
        if (busca) {
            let vagas = await Vagas.findAll({
                where: {
                    funcao: {
                        [Op.like]: `%${busca}%`
                    }
                },
                order: [
                    ['createdAt', 'DESC']
                ],
                include: "Empresa"

            });
            console.log(vagas);
            return res.render('vagas', { vagas });
        } else {
            let empresas = await Empresas.findAll();
            let vagas = await Vagas.findAll();
            res.render('main', {
                empresas: empresas.length,
                vagas: vagas.length,
                errors: {
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