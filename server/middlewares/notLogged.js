function notLogged(req,res,next){
    if(!req.session.empresaLogado){
        return res.redirect('/empresas/acessoEmpresa');
    }
    next();
}

module.exports = notLogged;