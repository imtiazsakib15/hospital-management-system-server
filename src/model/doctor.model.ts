import { Schema, model } from 'mongoose';
import { IDoctor } from '../interface/doctor.interface';

const doctorSchema = new Schema<IDoctor>(
  {
    id: Number,
    name: String,
    email: String,
    phoneNo: String,
    hospital: { type: Schema.Types.ObjectId, ref: 'Hospital' },
    specialization: { type: Schema.Types.ObjectId, ref: 'Specialization' },
  },
  { timestamps: true },
);

export const Doctor = model<IDoctor>('Doctor', doctorSchema);
