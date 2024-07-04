import { Schema, model } from 'mongoose';
import { IAppointment } from '../interface/appointment.interface';

const appointmentSchema = new Schema<IAppointment>(
  {
    id: Number,
    patientId: Number,
    hospital: { type: Schema.Types.ObjectId, ref: 'Hospital' },
    specialization: { type: Schema.Types.ObjectId, ref: 'Specialization' },
    doctor: { type: Schema.Types.ObjectId, ref: 'Doctor' },
    date: String,
    time: String,
  },
  { timestamps: true },
);

export const Appointment = model<IAppointment>(
  'Appointment',
  appointmentSchema,
);
