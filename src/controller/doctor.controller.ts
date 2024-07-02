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

const getAllDoctors = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const doctors = await Doctor.find({})
      .populate('hospital')
      .populate('specialization');

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Doctors retrieved',
      data: doctors,
    });
  } catch (error) {
    next(error);
  }
};

const updateDoctor = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const { doctor } = req.body;
    const result = await Doctor.updateOne({ id }, doctor, { new: true });

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Doctor updated',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteDoctor = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await Doctor.deleteOne({ id });

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Doctor deleted',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const doctorControllers = {
  createDoctor,
  getAllDoctors,
  updateDoctor,
  deleteDoctor,
};
