import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';


const routes = express.Router();
const classesControllers = new ClassesController();



//Listar aulas
routes.get('/classes', classesControllers.index);
//Criar uma aula
routes.post('/classes', classesControllers.create);
//Criar registro de controle
routes.post('/classes', ConnectionsController.create);


export default routes;
