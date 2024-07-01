import { Router } from 'express';
import { hospitalControllers } from '../controller/hospital.controller';

const router = Router();

router.post('/create-hospital', hospitalControllers.createHospital);

router.get('/', hospitalControllers.getAllHospitals);

export const hospitalRoutes = router;
