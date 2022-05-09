"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);

var _AffiliateRoutes = require('./app/routes/AffiliateRoutes'); var _AffiliateRoutes2 = _interopRequireDefault(_AffiliateRoutes);

class App {
  

   constructor ()
  {
    this.express = _express2.default.call(void 0, );
    this.configInitial();
    this.routes();
  }

   configInitial() 
  {
    this.express.use(_express2.default.json());
    this.express.use(_cors2.default.call(void 0, ));
    this.express.listen(3000);
  }

   routes() 
  {
    this.express.use("/affiliate", _AffiliateRoutes2.default);
  }
}

exports. default = new App().express
