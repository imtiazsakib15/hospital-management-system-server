import { Router } from 'express';
import { patientRoutes } from './patient.route';
import { hospitalRoutes } from './hospital.route';
import { specializationRoutes } from './specialization.route';

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
];

moduleRoutes.forEach((route: IModuleRoutes) =>
  router.use(route.path, route.route),
);

export default router;
