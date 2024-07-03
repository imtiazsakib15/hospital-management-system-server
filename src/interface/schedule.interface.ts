import { Types } from 'mongoose';

export interface ISchedule {
  id: number;
  doctor: Types.ObjectId;
  hospital: Types.ObjectId;
  specialization: Types.ObjectId;
  date: string;
  time: string;
}
