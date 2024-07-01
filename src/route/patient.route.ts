import { Router } from 'express';
import { patientControllers } from '../controller/patient.controller';

const router = Router();

router.post('/create-patient', patientControllers.createPatient);

export const patientRoutes = router;
