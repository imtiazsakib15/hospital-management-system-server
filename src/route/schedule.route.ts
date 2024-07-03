import { Router } from 'express';
import { scheduleControllers } from '../controller/schedule.controller';

const router = Router();

router.post('/create-schedule', scheduleControllers.createSchedule);

router.get('/', scheduleControllers.getAllSchedules);

router.get('/:id', scheduleControllers.getASchedule);

router.patch('/:id', scheduleControllers.updateSchedule);

export const scheduleRoutes = router;
