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

const getAHospital = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const hospital = await Hospital.findOne({ id });

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Hospital retrieved',
      data: hospital,
    });
  } catch (error) {
    next(error);
  }
};

const getAllHospitals = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const hospitals = await Hospital.find({});

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Hospitals retrieved',
      data: hospitals,
    });
  } catch (error) {
    next(error);
  }
};

const updateHospital = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const { hospital } = req.body;
    const result = await Hospital.updateOne({ id }, hospital, { new: true });

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Hospital updated',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteHospital = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await Hospital.deleteOne({ id });

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Hospital deleted',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const hospitalControllers = {
  createHospital,
  getAllHospitals,
  getAHospital,
  updateHospital,
  deleteHospital,
};
