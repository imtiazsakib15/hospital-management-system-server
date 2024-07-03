import { Router } from 'express';
import { patientRoutes } from './patient.route';
import { hospitalRoutes } from './hospital.route';
import { specializationRoutes } from './specialization.route';
import { doctorRoutes } from './doctor.route';
import { scheduleRoutes } from './schedule.route';
import { appointmentRoutes } from './appointment.route';

const router = Router();

interface IModuleRoutes {
  path: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  route: any;
}

const moduleRoutes: IModuleRoutes[] = [
  {
    path: '/patients',
    route: patientRoutes,
  },
  {
    path: '/hospitals',
    route: hospitalRoutes,
  },
  {
    path: '/specializations',
    route: specializationRoutes,
  },
  {
    path: '/doctors',
    route: doctorRoutes,
  },
  {
    path: '/schedules',
    route: scheduleRoutes,
  },
  {
    path: '/appointments',
    route: appointmentRoutes,
  },
];

moduleRoutes.forEach((route: IModuleRoutes) =>
  router.use(route.path, route.route),
);

export default router;
