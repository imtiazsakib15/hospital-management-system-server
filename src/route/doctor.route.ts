import { Router } from 'express';
import { doctorControllers } from '../controller/doctor.controller';

const router = Router();

router.post('/create-doctor', doctorControllers.createDoctor);

router.get('/', doctorControllers.getAllDoctors);

export const doctorRoutes = router;
