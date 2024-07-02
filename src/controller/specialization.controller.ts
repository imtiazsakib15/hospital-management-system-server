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

const getASpecialization = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const specialization = await Specialization.findOne({ id });

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Specialization retrieved',
      data: specialization,
    });
  } catch (error) {
    next(error);
  }
};

const updateSpecialization = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const { specialization } = req.body;
    const result = await Specialization.updateOne({ id }, specialization, {
      new: true,
    });

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Specialization updated',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteSpecialization = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await Specialization.deleteOne({ id });

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Specialization deleted',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const specializationControllers = {
  createSpecialization,
  getAllSpecializations,
  getASpecialization,
  updateSpecialization,
  deleteSpecialization,
};
