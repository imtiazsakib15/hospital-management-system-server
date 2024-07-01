import { Schema, model } from 'mongoose';
import { IHospital } from '../interface/hospital.interface';

const hospitalSchema = new Schema<IHospital>(
  {
    id: Number,
    hospitalName: String,
    address: String,
  },
  { timestamps: true },
);

export const HospitalIHospital = model<IHospital>(
  'HospitalIHospital',
  hospitalSchema,
);
