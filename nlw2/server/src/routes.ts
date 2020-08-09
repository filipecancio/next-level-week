import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';


const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsController = new ConnectionsController();



//Listar aulas
routes.get('/classes', classesControllers.index);
//Criar uma aula
routes.post('/classes', classesControllers.create);
//Criar registro de conexões
routes.post('/connections', connectionsController.create);
//Listar conexões
routes.get('/connections', connectionsController.index);


export default routes;
