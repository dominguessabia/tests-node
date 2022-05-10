"use strict";
exports.__esModule = true;
var express_1 = require("express");
var AffiliateController_1 = require("../controllers/AffiliateController");
var router = express_1.Router();
// Rotas
router.get('/index', AffiliateController_1["default"].index);
router.get('/verify', AffiliateController_1["default"].verifyPerson);
router.get('/converted', AffiliateController_1["default"].converted);
router.post('/register', AffiliateController_1["default"].create);
exports["default"] = router;
