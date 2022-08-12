function logadoUsuario(req,res,next){
    if(req.session.candidatoLogado){
        return res.redirect('/candidatos/areaCandidato');
    }
    next()
}

module.exports = logadoUsuario;