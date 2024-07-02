import { Types } from 'mongoose';

export interface IDoctor {
  id: number;
  name: string;
  email: string;
  phoneNo: string;
  hospital: Types.ObjectId;
  specialization: Types.ObjectId;
}
