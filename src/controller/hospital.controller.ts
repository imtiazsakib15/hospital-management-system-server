import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import sendResponse from '../utils/sendResponse';
import { generateId } from '../utils/generateId';
import { Hospital } from '../model/hospital.model';

const createHospital = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { hospital } = req.body;
    const hospitalInfo = {
      id: await generateId(Hospital),
      ...hospital,
    };
    const result = await Hospital.create(hospitalInfo);

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: 'Hospital created',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const hospitalControllers = { createHospital };
