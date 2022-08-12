function logadoEmpresaVagas(req,res,next){
    if(!req.session.empresaLogado){
        return res.redirect('/');
    }
    next()
}

module.exports = logadoEmpresaVagas;