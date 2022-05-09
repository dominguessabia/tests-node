"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _AffiliateController = require('../controllers/AffiliateController'); var _AffiliateController2 = _interopRequireDefault(_AffiliateController);

const router = _express.Router.call(void 0, );

// Rotas
router.get('/index', _AffiliateController2.default.index);
router.post('/register', _AffiliateController2.default.register);


exports. default = router;
