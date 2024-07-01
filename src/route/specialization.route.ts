import { Router } from 'express';
import { specializationControllers } from '../controller/specialization.controller';

const router = Router();

router.post(
  '/create-specialization',
  specializationControllers.createSpecialization,
);

export const specializationRoutes = router;
