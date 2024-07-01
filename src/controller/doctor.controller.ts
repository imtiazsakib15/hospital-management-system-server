import { NextFunction, Request, Response } from 'express';
import { Doctor } from '../model/doctor.model';
import httpStatus from 'http-status';
import sendResponse from '../utils/sendResponse';
import { generateId } from '../utils/generateId';

const createDoctor = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { doctor } = req.body;
    const doctorInfo = {
      id: await generateId(Doctor),
      ...doctor,
    };
    const result = await Doctor.create(doctorInfo);

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: 'Doctor created',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const doctorControllers = { createDoctor };
