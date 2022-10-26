import { Router } from 'express';
import herosController from '../controllers/herosController';

class HerosRoutes {

    public router:Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', herosController.index);
    }

}

const herosRoutes = new HerosRoutes();

export default herosRoutes.router;