import { Request, Response } from 'express';
import db from '../database';

class HerosController {

    public async list(req:Request, res:Response): Promise<void>{
        const heroes = await db.query('SELECT * FROM heros');
        res.json(heroes);
    }

    public async getOne(req:Request, res:Response): Promise<any>{
        const { id } = req.params;
        const hero = await db.query('SELECT * FROM heros WHERE id = ?', [id]);
        if(hero.length > 0){
            return res.json(hero[0]);
        }
        res.status(404).json({message:"El Héroe consultado no existe"});
    }

    public async create(req:Request, res:Response): Promise<void>{
        await db.query('INSERT INTO heros set ?', [req.body]);
        res.json({message: "Héroe creado exitosamente!"});
    }

    public async delete(req:Request, res:Response): Promise<void>{
        const { id } = req.params;
        await db.query('DELETE FROM heros WHERE id = ?', [id])
        res.json({message: "El Héroe con id: " + id + " fue eliminado exitosamente!"});
    }

    public async update(req:Request, res:Response): Promise<void>{
        const { id } = req.params;
        await db.query('UPDATE heros set ? WHERE id = ?', [req.body, id]);
        res.json({message: "El Héroe con id: " + id + " fue actualizado exitosamente!"});
    }
}

const herosController = new HerosController();
export default herosController;