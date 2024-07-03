import { Router } from 'express';
import { scheduleControllers } from '../controller/schedule.controller';

const router = Router();

router.post('/create-schedule', scheduleControllers.createSchedule);

router.get('/', scheduleControllers.getAllSchedules);

router.get('/:id', scheduleControllers.getASchedule);

export const scheduleRoutes = router;
