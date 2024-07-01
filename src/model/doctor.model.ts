import { Schema, model } from 'mongoose';
import { IDoctor } from '../interface/doctor.interface';

const doctorSchema = new Schema<IDoctor>(
  {
    id: Number,
    name: String,
    email: String,
    phoneNo: String,
    hospitalId: Number,
    specializationId: Number,
  },
  { timestamps: true },
);

export const Doctor = model<IDoctor>('Doctor', doctorSchema);
