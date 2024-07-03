import { NextFunction, Request, Response } from 'express';
import { Appointment } from '../model/appointment.model';
import httpStatus from 'http-status';
import sendResponse from '../utils/sendResponse';
import { generateId } from '../utils/generateId';
import moment from 'moment';

const createAppointment = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { appointment } = req.body;
    const appointmentInfo = {
      id: await generateId(Appointment),
      date: moment().format('L'),
      ...appointment,
    };
    const result = await Appointment.create(appointmentInfo);

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: 'Appointment created',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const appointmentControllers = {
  createAppointment,
};
