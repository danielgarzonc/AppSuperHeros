"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const herosController_1 = __importDefault(require("../controllers/herosController"));
class HerosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', herosController_1.default.index);
    }
}
const herosRoutes = new HerosRoutes();
exports.default = herosRoutes.router;
