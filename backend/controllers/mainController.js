const controller = {
    main: (req, res) => {
        res.render('main')
    },
    opcaoAcesso: (req, res) => {
        res.render('opcaoAcesso')
    },
    politica: (req, res) => {
        res.render('politicas')
    },
    sobre: (req, res) => {
        res.render('sobre')
    }
}

module.exports = controller;