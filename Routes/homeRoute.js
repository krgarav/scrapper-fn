const express = require("express");
const router = express.Router();
const homeController = require('../Controller/homeController');

router.get("/getdata", homeController.getSearchQuery);

router.get("/home", (req, res) => {
    console.log("request received")
    res.send("hello from scrapper <^_^>");

})
module.exports = router;