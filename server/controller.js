// const request = require('request')
// const fetch = require('node-fetch');
​
const controller = {
    getDrinksByName: (req,res,next) => {
        return next();
    }
    // getDrinksByName: async (req, res, next) => {
    //     const {drinkName} = req.headers;
    //     console.log('in controller.getDrinksByName', drinkName);
    //     const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`;

    //     axios.get(url)
    //         .then(res => {
    //             res.locals.cocktails = res.data.drinks;
    //             console.log('got the res', res.locals.cocktails)
    //             return next()
    //         })
    //         // .catch((e) => next(e));
        
    // }

};
​​
module.exports = controller;