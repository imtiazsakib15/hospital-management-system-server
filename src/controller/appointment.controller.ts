import { NextFunction, Request, Response } from 'express';
import { Appointment } from '../model/appointment.model';
import httpStatus from 'http-status';
import sendResponse from '../utils/sendResponse';
import { generateId } from '../utils/generateId';

const createAppointment = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { appointment } = req.body;
    const appointmentInfo = {
      id: await generateId(Appointment),
      date: new Date().toLocaleDateString(),
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

const getAllAppointments = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const appointments = await Appointment.find({})
      .populate('doctor')
      .populate('hospital')
      .populate('specialization');

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Appointments retrieved',
      data: appointments,
    });
  } catch (error) {
    next(error);
  }
};

const getAnAppointment = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const appointment = await Appointment.findOne({ id })
      .populate('doctor')
      .populate('hospital')
      .populate('specialization');

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Appointment retrieved',
      data: appointment,
    });
  } catch (error) {
    next(error);
  }
};

const deleteAppointment = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await Appointment.deleteOne({ id });

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Appointment deleted',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const appointmentControllers = {
  createAppointment,
  getAllAppointments,
  getAnAppointment,
  deleteAppointment,
};
