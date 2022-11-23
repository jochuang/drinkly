const express = require('express');
const controller = require('./controller');
const router = express.Router();
// ​
// router.get('/',
//   controller.getDrinksByName,
//   (req, res) => {
//     res.status(200).json(res.locals.cocktails)
//   }
// );
// ​
module.exports = router;
