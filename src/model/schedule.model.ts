import { Schema, model } from 'mongoose';
import { ISchedule } from '../interface/schedule.interface';

const scheduleSchema = new Schema<ISchedule>(
  {
    id: Number,
    doctor: { type: Schema.Types.ObjectId, ref: 'Doctor' },
    hospital: { type: Schema.Types.ObjectId, ref: 'Hospital' },
    specialization: { type: Schema.Types.ObjectId, ref: 'Specialization' },
    date: String,
    time: String,
  },
  { timestamps: true },
);

export const Schedule = model<ISchedule>('Schedule', scheduleSchema);
