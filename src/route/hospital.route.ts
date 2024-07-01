import { Router } from 'express';
import { hospitalControllers } from '../controller/hospital.controller';

const router = Router();

router.post('/create-hospital', hospitalControllers.createHospital);

export const hospitalRoutes = router;
