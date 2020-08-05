import express from 'express';
import db from './database/connection';

const routes = express.Router();

//Criar uma aula
routes.post('/classes', async (request,response)=>{
   const {
       name,
       avatar,
       whatsapp,
       bio,
       subject,
       cost,
       shedule
   } = request.body;

   const insertedUsersIds =await db('users').insert({
        name,
       avatar,
       whatsapp,
       bio,
   });
   const user_id = insertedUsersIds[0];
   await db('classes').insert({
    subject,
    cost,
    user_id
    })
   
   return response.send();
});

export default routes;
