const  { Empresas } = require('../database/models');
const  { Vagas } = require('../database/models');
const bcrypt = require('bcrypt');

const controller = {
    registro: (req, res) => {
        return res.render('formEmpresa');
    },
    
    acesso: (req, res) => {
        return res.render('acessoEmpresa');
    },

    cadastrarVagas: (req, res) => {
        return res.render('cadastrarVagas');
    },

    vagasEmpresas: async (req, res) => {

        let vagas = await Vagas.findAll({
            where:{
                empresaId: req.session.empresaLogado.id
            },
            include: "Empresa"
        })
        return res.render('vagasEmpresas', {
            vagas
        });
    },

    vagasDelete: async (req, res) => {
         await Vagas.destroy({
            where:{
                id: req.params.id
            }
        })
        return res.render('/vagasEmpresas/');
    },

    vagaRegister: async (req, res) => {
        console.log(req.session.empresaLogado);
        let vagasCreate = { ...req.body }
        let vagasCreated = await Vagas.create({
            ...vagasCreate,
            empresaId: req.session.empresaLogado.id 
        });
        return res.redirect('/empresas/acessoEmpresa');
    },

    processRegister: async (req, res) => {
        let empresasToCreate = {
            ...req.body,
            password: bcrypt.hashSync(req.body.password, 10)
        }

        try {
            let empresasToCreated = await Empresas.create(empresasToCreate);
            return res.redirect('/empresas/acessoEmpresa');
        } catch (error){
            console.log(error)
            res.render('formEmpresa', {
                errors: {
                    email: {
                        message: 'Este email já está registrado'
                    }
                },
            });
        }   
    },

    acessoProcess: async (req, res) => {
        let empresaToLogin = await Empresas.findOne({
           where: {email: req.body.email}
        });

        if(empresaToLogin) {
            let verificaPassword = bcrypt.compareSync(req.body.password, empresaToLogin.password);

            if(verificaPassword){
                delete empresaToLogin.password;
                res.clearCookie('empresaToEmail');
                //req.session.destroy();
                //req.session.create();
                req.session.empresaLogado = empresaToLogin;

            if(req.body.remember_empresa){
                res.cookie('empresaToEmail', req.body.email, { maxAge: (1000 * 60) * 30});
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
        console.log(req.session.empresaLogado)
        return res.render('areaEmpresa', {
            empresaLogado: req.session.empresaLogado
        });
    },

    logout: (req, res) => {
        res.clearCookie('empresaToEmail');
        req.session.destroy();
        return res.redirect('/');
    }

}

module.exports = controller;

