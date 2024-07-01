import { Router } from 'express';
import { specializationControllers } from '../controller/specialization.controller';

const router = Router();

router.post(
  '/create-specialization',
  specializationControllers.createSpecialization,
);

router.get('/', specializationControllers.getAllSpecializations);

export const specializationRoutes = router;
