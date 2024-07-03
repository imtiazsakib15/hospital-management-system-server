import { Router } from 'express';
import { appointmentControllers } from '../controller/appointment.controller';

const router = Router();

router.post('/create-appointment', appointmentControllers.createAppointment);

export const appointmentRoutes = router;
