// const axios = require('axios');
const fetch = require('node-fetch')
 
const controller = {
    getDrinksByName: (req, res, next) => {

        const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mojito'

        fetch(url)
            .then(resp => resp.json())
            .then(resp => {
                console.log('in getDrinksByName Controller')
                console.log(resp)
                res.locals.drinks = resp.drinks;
                return next()
            })
            // .catch((e) => console.log(e))
    }
}

module.exports = controller;