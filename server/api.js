const express = require('express');
const router = express.Router();
const controller = require('./controller')

router.get('/', 
controller.getDrinksByName,
(req,res) => {
    res.status(200).json(res.locals.drinks);
});

module.exports = router;