import { Router } from 'express';
import { patientControllers } from '../controller/patient.controller';

const router = Router();

router.post('/create-patient', patientControllers.createPatient);

router.get('/', patientControllers.getAllPatients);

router.delete('/:id', patientControllers.deletePatient);

export const patientRoutes = router;
