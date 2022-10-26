import { Request, Response } from 'express';
import db from '../database';

class HerosController {
    index(req:Request, res:Response){
        db.query('DESCRIBE heros');
        res.json('games');
    }
}

const herosController = new HerosController();
export default herosController;