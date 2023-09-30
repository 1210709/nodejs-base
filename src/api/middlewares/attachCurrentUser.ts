import { Container} from 'typedi';

import winston from 'winston';

import config from '../../../config';

import IUserRepo from '../../services/IRepos/IUserRepo';
import { Request } from 'express';

/**
 * Attach user to req.user
 * @param {*} req Express req Object
 * @param {*} res  Express res Object
 * @param {*} next  Express next Function
 */
const attachCurrentUser = async (req:Request, res, next) => {
  const Logger = Container.get('logger') as winston.Logger;
  try {
    
    const userRepo = Container.get(config.repos.user.name) as IUserRepo

    if( !req.auth || req.auth == undefined )
      next( new Error("Token inexistente ou inválido ") );

    const id = req.auth.id;

    const isFound = await userRepo.exists( id );

    if (isFound){
      next();
    }
    else
      next( new Error("Token não corresponde a qualquer utilizador do sistema") );
  } catch (e) {
    Logger.error('🔥 Error attaching user to req: %o', e);
    return next(e);
  }
};

export default attachCurrentUser;
