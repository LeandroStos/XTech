const  { Candidatos } = require('../database/models');
const bcrypt = require('bcrypt');

const controller = {
    registro: (req, res) => {
        return res.render('formCandidato');
    },
    
    acesso: (req, res) => {
        return res.render('acessoCandidato');
    },

    processRegister: async (req, res) => {

        let candidatosToCreate = {
            ...req.body,
            avatar: req.file.filename,
            password: bcrypt.hashSync(req.body.password, 10)
        }
        
        try {
            let candidatoCreated = await Candidatos.create(candidatosToCreate);
            return res.redirect('/candidatos/acessoCandidato');
        } catch (error){
            console.log(error)
            res.render('formCandidato', {
                errors: {
                    email: {
                        message: 'Este email já está registrado'
                    }
                },
            });
        }   
    },

    acessoProcess: async (req, res) => {
        let candidatoLogin = await Candidatos.findOne({
           where: {email: req.body.email}
        });

        if(candidatoLogin) {
            let verificaPassword = bcrypt.compareSync(req.body.password, candidatoLogin.password);

            if(verificaPassword){
                delete candidatoLogin.password;
                res.clearCookie('candidatoEmail');
                //req.session.destroy();
                //req.session.create();
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
        console.log(req.session.candidatoLogado)
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

