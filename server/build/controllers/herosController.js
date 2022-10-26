"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class HerosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const heroes = yield database_1.default.query('SELECT * FROM heros');
            res.json(heroes);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const hero = yield database_1.default.query('SELECT * FROM heros WHERE id = ?', [id]);
            if (hero.length > 0) {
                return res.json(hero[0]);
            }
            res.status(404).json({ message: "El Héroe consultado no existe" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO heros set ?', [req.body]);
            res.json({ message: "Héroe creado exitosamente!" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM heros WHERE id = ?', [id]);
            res.json({ message: "El Héroe con id: " + id + " fue eliminado exitosamente!" });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE heros set ? WHERE id = ?', [req.body, id]);
            res.json({ message: "El Héroe con id: " + id + " fue actualizado exitosamente!" });
        });
    }
}
const herosController = new HerosController();
exports.default = herosController;
