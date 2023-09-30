import { Router, Request, Response } from 'express';

import { Container } from 'typedi';
import IRoleController from '../../controllers/IControllers/IRoleController'; 

import config from "../../../config";
const route = Router();

export default (app: Router) => {
  app.use('/test', route);

  const ctrl = Container.get(config.controllers.role.name) as IRoleController;

  route.post('',
    (req, res: Response, next) => {
      return res.json( "POST WORKING!" ).status(200);
    } );

  route.put('',
    (req, res: Response, next) => {
      return res.json( "PUT WORKING!" ).status(200);
    });
};