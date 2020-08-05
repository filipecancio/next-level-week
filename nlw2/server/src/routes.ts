import express from 'express';
import ClassesController from './controllers/ClassesController';


const routes = express.Router();
const classesControllers = new ClassesController();



//Listar aulas
routes.get('/classes', classesControllers.index);
//Criar uma aula
routes.post('/classes', classesControllers.create);

export default routes;
