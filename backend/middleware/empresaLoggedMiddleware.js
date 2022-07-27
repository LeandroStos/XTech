let empresaLoggedMiddleware = (req,res,next) => {
    if(req.session.empresaLogado) {
        return res.redirect('/empresas/areaEmpresa');
    }

    next();
}

module.exports = empresaLoggedMiddleware;