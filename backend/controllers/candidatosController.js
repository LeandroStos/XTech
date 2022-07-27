const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

const Candidatos = require('../models/Candidatos');

const controller = {
    registro: (req, res) => {
        return res.render('formCandidato');
    },
    
    acesso: (req, res) => {
        return res.render('acessoCandidato');
    },

    processRegister: (req, res) => {
        const resultValidations = validationResult(req);

        if (resultValidations.errors.length > 0) {
            return res.render('formCandidato', {
                errors: resultValidations.mapped(),
                oldData: req.body
            })
        }

        let candidatosExists = Candidatos.findUserByField('email', req.body.email);

        if(candidatosExists) {
            return res.render('formCandidato', {
                errors: {
                    email: {
                        message: 'Este email já está registrado'
                    }
                },
                oldData: req.body
            });
        }

        let candidatosToCreate = {
            ...req.body,
            password: bcrypt.hashSync(req.body.password, 10)
        }

        let candidatoCreated = Candidatos.create(candidatosToCreate);

        return res.redirect('/candidatos/acessoCandidato');
    },

    acessoProcess: (req, res) => {
        let candidatoLogin = Candidatos.findUserByField('email',req.body.email);

        if(candidatoLogin) {
            let verificaPassword = bcrypt.compareSync(req.body.password, candidatoLogin.password);

            if(verificaPassword){
                delete candidatoLogin.password;
                req.session.candidatoLogado = candidatoLogin;

            if(req.body.remember_candidato){
                res.cookie('candidatoEmail', req.body.email, { maxAge: (1000 * 60) * 30});
            }


                return res.redirect('/candidatos/areaCandidato');
            }
        }

        return res.render('acessoCandidato', {
            errors:{
                email: {
                    message: "Dados invalidos"
                }
            }
        })
    },
    profile: (req,res) => {
        return res.render('areaCandidato', {
            candidatoLogado: req.session.candidatoLogado
        });
    },

    logout: (req, res) => {
        res.clearCookie('candidatoEmail');
        req.session.destroy();
        return res.redirect('/');
    }
}

module.exports = controller;