import { Router } from 'express';
import cors from 'cors';

import CompanyController from './app/controllers/CompanyController';
import EmployeeController from './app/controllers/EmployeeController';
import PositionController from './app/controllers/PositionController';
import CollaboratorController from './app/controllers/CollaboratorController';

const routes = Router();
routes.use(cors());

routes.get('/', (req, res) => res.json({ result: 'BOMBANDO' }));

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

// POSITION ROUTES
routes.post('/positions', PositionController.store);
routes.get('/positions', PositionController.index);
routes.get('/positions/:uid', PositionController.show);
routes.put('/positions/:uid', PositionController.update);
routes.delete('/positions/:uid', PositionController.delete);

// COLLABORATORS ROUTES
routes.post('/collaborators', CollaboratorController.store);
routes.get('/collaborators', CollaboratorController.index);
routes.get('/collaborators/:uid', CollaboratorController.show);
routes.put('/collaborators/:uid', CollaboratorController.update);
routes.delete('/collaborators/:uid', CollaboratorController.delete);

export default routes;
