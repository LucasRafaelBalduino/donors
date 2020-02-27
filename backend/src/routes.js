import { Router } from 'express';

import DonorController from './app/controllers/DonorController';

const routes = Router();

routes.post('/Donor', DonorController.store);

export default routes;
