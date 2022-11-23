const controller = {
    getDrinksByName: (req, res, next) => {
        res.locals.test = 'in the controller'
        return next()
    }
}

module.exports = controller;