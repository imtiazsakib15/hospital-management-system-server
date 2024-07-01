import { Router } from 'express';

const router = Router();

interface IModuleRoutes {
  path: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  route: any;
}

const moduleRoutes: IModuleRoutes[] = [
  // {
  //   path: '/users',
  //   route: UserRoutes,
  // },
];

moduleRoutes.forEach((route: IModuleRoutes) =>
  router.use(route.path, route.route),
);

export default router;
