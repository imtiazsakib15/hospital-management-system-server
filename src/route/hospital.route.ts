import { Router } from 'express';
import { hospitalControllers } from '../controller/hospital.controller';

const router = Router();

router.post('/create-hospital', hospitalControllers.createHospital);

router.get('/', hospitalControllers.getAllHospitals);

router.patch('/:id', hospitalControllers.updateHospital);

router.delete('/:id', hospitalControllers.deleteHospital);

export const hospitalRoutes = router;
