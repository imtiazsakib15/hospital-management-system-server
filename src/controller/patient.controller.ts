import { NextFunction, Request, Response } from 'express';
import { Patient } from '../model/patient.model';
import httpStatus from 'http-status';
import sendResponse from '../utils/sendResponse';
import { generateId } from '../utils/generateId';

const createPatient = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { patient } = req.body;
    const patientInfo = {
      id: await generateId(Patient),
      ...patient,
    };
    const result = await Patient.create(patientInfo);

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: 'Patient created',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const patientControllers = { createPatient };
