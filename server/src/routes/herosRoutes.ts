import { Router } from 'express';
import herosController from '../controllers/herosController';

class HerosRoutes {

    public router:Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', herosController.list);
        this.router.get('/:id', herosController.getOne);
        this.router.post('/', herosController.create);
        this.router.put('/:id', herosController.update);
        this.router.delete('/:id', herosController.delete);
    }

}

const herosRoutes = new HerosRoutes();

export default herosRoutes.router;