import { Router } from 'express';
import { appointmentControllers } from '../controller/appointment.controller';

const router = Router();

router.post('/create-appointment', appointmentControllers.createAppointment);

router.get('/', appointmentControllers.getAllAppointments);

router.delete('/:id', appointmentControllers.deleteAppointment);

export const appointmentRoutes = router;
