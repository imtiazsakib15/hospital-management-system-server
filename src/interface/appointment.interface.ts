import { Types } from 'mongoose';

export interface IAppointment {
  id: number;
  hospital: Types.ObjectId;
  specialization: Types.ObjectId;
  doctor: Types.ObjectId;
  date: string;
  time: string;
}
