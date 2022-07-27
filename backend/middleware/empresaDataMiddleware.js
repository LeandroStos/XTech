const Empresas = require('../models/Empresas');

let empresaDataMiddleware = (req,res,next) => {
    let emailInCookie = req.cookies.empresaEmail;
    let empresaFromCookie = Empresas.findEmpresaByField('email', emailInCookie)

    if(empresaFromCookie) {
        req.session.empresaLogado = empresaFromCookie;
    }

    next();
}


module.exports = empresaDataMiddleware;
