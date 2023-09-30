import { Router, Request, Response, NextFunction } from 'express';

import middlewares from '../middlewares';

var user_controller = require('../../controllers/userController');

const route = Router();

export default (app: Router) => {
  app.use('/users', route);

  route.get('/me', middlewares.isAuth, middlewares.attachCurrentUser, (req: Request, res: Response) => {
    return res.json({ user: req.auth }).status(200);
  });
};
