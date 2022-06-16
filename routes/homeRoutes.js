const express = require("express");

const { indexView, iconView } = require("../controllers/homeContollers");
const router = express.Router();

router.get("/", indexView);
router.get("/icons", iconView);

module.exports = { router: router };
