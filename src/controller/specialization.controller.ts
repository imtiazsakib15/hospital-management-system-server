import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import sendResponse from '../utils/sendResponse';
import { generateId } from '../utils/generateId';
import { Specialization } from '../model/specialization.model';

const createSpecialization = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { specialization } = req.body;
    const specializationInfo = {
      id: await generateId(Specialization),
      ...specialization,
    };
    const result = await Specialization.create(specializationInfo);

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: 'Specialization created',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAllSpecializations = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const specializations = await Specialization.find({});

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Specializations retrieved',
      data: specializations,
    });
  } catch (error) {
    next(error);
  }
};

export const specializationControllers = {
  createSpecialization,
  getAllSpecializations,
};
