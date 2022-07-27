const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

const Empresas = require('../models/Empresas');

const empresaController = {
    registroEmpresa: (req, res) => {
        return res.render('formEmpresa');
    },
    
    acessoEmpresa: (req, res) => {
        return res.render('acessoEmpresa');
    },

    processRegister: (req, res) => {
        const resultValidations = validationResult(req);

        if (resultValidations.errors.length > 0) {
            return res.render('formEmpresa', {
                errors: resultValidations.mapped(),
                oldData: req.body
            })
        }

        let empresasExists = Empresas.findEmpresaByField('email', req.body.email);

        if(empresasExists) {
            return res.render('formEmpresa', {
                errors: {
                    email: {
                        message: 'Este email já está registrado'
                    }
                },
                oldData: req.body
            });
        }

        let empresasToCreate = {
            ...req.body,
            password: bcrypt.hashSync(req.body.password, 10)
        }

        let empresasCreated = Empresas.create(empresasToCreate);

        return res.redirect('/empresas/acessoEmpresa');
    },

    acessoProcess: (req, res) => {
        let empresasToLogin = Empresas.findEmpresaByField('email',req.body.email);

        if(empresasToLogin) {
            let verificaPassword = bcrypt.compareSync(req.body.password, empresasToLogin.password);

            if(verificaPassword){
                delete empresasToLogin.password;
                req.session.empresaLogado = empresasToLogin;

            if(req.body.remember_empresa){
                res.cookie('empresaEmail', req.body.email, { maxAge: (1000 * 60) * 30});
            }

                return res.redirect('/empresas/areaEmpresa');
            }    
        }

        return res.render('acessoEmpresa', {
            errors:{
                email: {
                    message: "Dados invalidos"
                }
            }
        })

    },
    profile: (req,res) => {
        return res.render('areaEmpresa', {
            empresaLogado: req.session.empresaLogado
        });
    },

    logout: (req, res) => {
        res.clearCookie('empresaEmail');
        req.session.destroy();
        return res.redirect('/');
    }
}

module.exports = empresaController;