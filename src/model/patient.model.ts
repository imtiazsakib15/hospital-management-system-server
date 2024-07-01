import { Schema, model } from 'mongoose';
import { IPatient } from '../interface/patient.interface';

const patientSchema = new Schema<IPatient>({
  name: String,
  address: String,
  email: String,
  phoneNo: String,
});

export const Patient = model<IPatient>('Patient', patientSchema);
