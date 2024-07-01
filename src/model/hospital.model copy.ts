import { Schema, model } from 'mongoose';
import { ISpecialization } from '../interface/specialization.interface';

const specializationSchema = new Schema<ISpecialization>(
  {
    id: Number,
    specialization: String,
  },
  { timestamps: true },
);

export const Specialization = model<ISpecialization>(
  'Specialization',
  specializationSchema,
);
