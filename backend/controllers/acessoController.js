const acessoController = {
    page: (req,res)=>{
        res.render('acesso');
    },
    redefinir: (req,res)=>{
        res.render('redefinir');
    }
    
}

module.exports = acessoController;