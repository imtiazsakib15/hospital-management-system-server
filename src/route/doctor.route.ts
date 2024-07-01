import { Router } from 'express';
import { doctorControllers } from '../controller/doctor.controller';

const router = Router();

router.post('/create-doctor', doctorControllers.createDoctor);

export const doctorRoutes = router;
