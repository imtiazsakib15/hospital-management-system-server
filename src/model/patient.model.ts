import { Schema, model } from 'mongoose';
import { IPatient } from '../interface/patient.interface';

const patientSchema = new Schema<IPatient>(
  {
    id: Number,
    name: String,
    address: String,
    email: String,
    phoneNo: String,
  },
  { timestamps: true },
);

export const Patient = model<IPatient>('Patient', patientSchema);
