const fetch = require('node-fetch')
 
const controller = {
    getDrinksByName: (req, res, next) => {
        const drinkName = req.headers.drinkname;
        const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`
        fetch(url)
            .then(resp => resp.json())
            .then(resp => {
                res.locals.drinks = resp.drinks;
                return next()
            })
    }
}

module.exports = controller;