import { Router } from 'express';
import { scheduleControllers } from '../controller/schedule.controller';

const router = Router();

router.post('/create-schedule', scheduleControllers.createSchedule);

export const scheduleRoutes = router;
