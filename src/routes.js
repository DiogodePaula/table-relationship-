import {
    Router
} from 'express';
import cors from 'cors';

import CompanyController from './app/controllers/CompanyController';
import EmployeeController from './app/controllers/EmployeeController';
import RoleController from './app/controllers/RoleController';


const routes = Router();
routes.use(cors());

routes.get('/', (req, res) => res.json({
    result: 'BOMBANDO'
}));

// COMPANY ROUTES
routes.post('/companies', CompanyController.store);
routes.get('/companies', CompanyController.index);
routes.get('/companies/:uid', CompanyController.show);
routes.put('/companies/:uid', CompanyController.update);
routes.delete('/companies/:uid', CompanyController.delete);

// EMPLOYEE ROUTES
routes.post('/employees', EmployeeController.store);
routes.get('/employees', EmployeeController.index);
routes.get('/employees/:uid', EmployeeController.show);
routes.put('/employees/:uid', EmployeeController.update);
routes.delete('/employees/:uid', EmployeeController.delete);

// ROLES ROUTES
routes.post('/roles', RoleController.store);
routes.get('/roles', RoleController.index);
routes.get('/roles/:uid', RoleController.show);
routes.put('/roles/:uid', RoleController.update);
routes.delete('/roles/:uid', RoleController.delete);



export default routes;