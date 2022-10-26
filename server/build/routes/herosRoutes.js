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
        this.router.get('/', herosController_1.default.list);
        this.router.get('/:id', herosController_1.default.getOne);
        this.router.post('/', herosController_1.default.create);
        this.router.put('/:id', herosController_1.default.update);
        this.router.delete('/:id', herosController_1.default.delete);
    }
}
const herosRoutes = new HerosRoutes();
exports.default = herosRoutes.router;
