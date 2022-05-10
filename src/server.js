"use strict";
exports.__esModule = true;
var express_1 = require("express");
var cors_1 = require("cors");
var AffiliateRoutes_1 = require("./app/routes/AffiliateRoutes");
var App = /** @class */ (function () {
    function App() {
        this.express = express_1["default"]();
        this.configInitial();
        this.routes();
    }
    App.prototype.configInitial = function () {
        this.express.use(express_1["default"].json());
        this.express.use(cors_1["default"]());
        this.express.listen(3000);
    };
    App.prototype.routes = function () {
        this.express.use("/affiliates", AffiliateRoutes_1["default"]);
    };
    return App;
}());
exports["default"] = new App().express;
