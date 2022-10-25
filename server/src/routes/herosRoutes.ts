import { Router } from 'express';

class HerosRoutes {

    public router:Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', (req, res)=>res.send('Heros'));
    }

}

const herosRoutes = new HerosRoutes();

export default herosRoutes.router;