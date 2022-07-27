const Candidatos = require('../models/Candidatos');

let candidatoDataMiddleware = (req,res,next) => {
    let emailInCookie = req.cookies.candidatoEmail;
    let candidatoFromCookie = Candidatos.findUserByField('email', emailInCookie)

    if(candidatoFromCookie) {
        req.session.candidatoLogado = candidatoFromCookie;
    }

    next();
}


module.exports = candidatoDataMiddleware;
