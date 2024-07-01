import { Router } from 'express';
import { patientRoutes } from './patient.route';

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
];

moduleRoutes.forEach((route: IModuleRoutes) =>
  router.use(route.path, route.route),
);

export default router;
