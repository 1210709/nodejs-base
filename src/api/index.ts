import { Router } from 'express'; 
import user from './routes/userRoute';
import role from './routes/roleRoute';
import test from './routes/testRoute';
import auth from './routes/authRoute';


export default () => {
	const app = Router();

	auth(app);
	user(app);
	role(app);
	test(app);

	return app
}