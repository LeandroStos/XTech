let candidatoMiddleware = (req,res,next) => {
    if(!req.session.candidatoLogado){
        return res.redirect('/candidatos/acessoCandidato')
    }

    next();
}

module.exports = candidatoMiddleware;