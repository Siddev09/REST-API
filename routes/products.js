
const {getAllProducts , getAllProductsTesting} = require("../controllers/products")
const express = require('express');
const router = express.Router();


router.route('/').get(getAllProducts);
router.route('/test').get(getAllProductsTesting);


module.exports = router;
