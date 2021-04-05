__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.json({ true: "Mau Cari Apa om" })
})


module.exports = router
